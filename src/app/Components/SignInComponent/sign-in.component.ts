import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from './SignInDialogComponent/sign-in-dialog/sign-in-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/CustomerService';
import type { CustomerType } from 'src/app/GlobalTypes/global-types.component';

export type Credentials = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private customerService: CustomerService
  ) {}

  /* Variables */

  customer = {} as CustomerType;
  invalidLogin: boolean = true;
  credentials: Credentials = {
    email: '',
    password: '',
  };

  /* Functions */

  /* Dialog Function */
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '250px',
      enterAnimationDuration: enterAnimationDuration,
      exitAnimationDuration: exitAnimationDuration,
    });
  }

  /* Updating User Input  */
  updateEmail(e: any) {
    this.credentials.email = e.target.value;
  }

  updatePassword(e: any) {
    this.credentials.password = e.target.value;
  }

  submitHandler() {
    this.http
      .post('https://localhost:7233/api/auth/login', {
        email: this.credentials.email,
        password: this.credentials.password,
      })
      .subscribe({
        next: (response) => {
          // extract token from response
          const token = (response as any).token;
          // store token in local storage
          localStorage.setItem('jwt', token);
          // get customer data from email
          this.getCustomerFromEmail(this.credentials.email);
          // redirect to home page
          this.invalidLogin = false;
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
          this.openDialog('0.5s', '0.5s');
          this.invalidLogin = true;
        },
        complete: () => {
          // define on request complete logic
          // 'complete' is not the same as 'finalize'!!
          // this logic will not be executed if error is fired
          this.router.navigate(['/']);
        },
      });
  }

  /* Get Customer from Email (it works because email is unique) */
  getCustomerFromEmail(email: string) {
    this.http
      .get<CustomerType>(
        'https://localhost:7233/api/Customers/customer/' + email
      )
      .subscribe((customer) => {
        this.customerService.setCustomer(customer);
        //sace customer in local storage
        localStorage.setItem('customer', JSON.stringify(customer));
      });
  }
}
