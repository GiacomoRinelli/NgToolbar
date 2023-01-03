import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from './SignInDialogComponent/sign-in-dialog/sign-in-dialog.component';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

export type Credentials = {
  email: string;
  password: string;
};

export type AuthenticatedResponse = {
  token: string;
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
    private router: Router
  ) {}

  /* Variables */

  invalidLogin: boolean = true;
  credentials: Credentials = {
    email: '',
    password: '',
  };

  /* Functions */

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
          // logic for successful login
          const token = (response as any).token;
          localStorage.setItem('jwt', token);
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

  login = (form: NgForm) => {
    if (form.valid) {
      this.http
        .post<AuthenticatedResponse>(
          'https://localhost:7233/api/auth/login',
          this.credentials,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            localStorage.setItem('jwt', token);
            this.invalidLogin = false;
            this.router.navigate(['/']);
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };
}
