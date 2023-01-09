import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { CustomerType } from '../../GlobalTypes/global-types.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css'],
})
export class SignUpComponent {
  firstFormGroup = this._formBuilder.group(
    {
      email: [
        '',
        Validators.compose([Validators.required, this.emailValidator]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, this.passwordValidator]),
      ],
      confirmPassword: ['', Validators.required],
    },
    { validator: this.confirmPasswordValidator }
  );
  secondFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    title: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    companyName: ['', Validators.required],
    salesAddress: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient,
    private router: Router
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  /* Variables */

  customer: CustomerType = {
    /* First step */
    emailAddress: '',
    passwordHash: '',

    /* Second step */
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',

    /* Third step */
    companyName: '',
    salesPerson: '',
    phone: '',

    /* Server side data (don't require a form step) */
    customerId: 0,
    passwordSalt: '',
    rowguid: '123456789',
    suffix: '',
    modifiedDate: '',
    nameStyle: false,
    customerAddresses: [],
    salesOrderHeaders: [],
  };
  isSignUpButtonEnabled: boolean = false;

  /* Functions */

  /* Functions for checking form field validations */

  emailValidator(control: any): { [key: string]: any } | null {
    const emailRegex = /@/;
    if (!emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  passwordValidator(control: any): { [key: string]: any } | null {
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  confirmPasswordValidator(control: any): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordsDoNotMatch: true };
    }
    return null;
  }

  /* Sign Up Handler */
  signUpHandler = () => {
    /* First step */
    this.customer.emailAddress = this.firstFormGroup.value.email ?? '';
    this.customer.passwordHash = this.firstFormGroup.value.password ?? '';

    /* Second step */
    this.customer.title = this.secondFormGroup.value.title ?? '';
    this.customer.firstName = this.secondFormGroup.value.firstName ?? '';
    this.customer.middleName = this.secondFormGroup.value.middleName ?? '';
    this.customer.lastName = this.secondFormGroup.value.lastName ?? '';

    /* Third step */
    this.customer.companyName = this.thirdFormGroup.value.companyName ?? '';
    this.customer.salesPerson = this.thirdFormGroup.value.salesAddress ?? '';
    this.customer.phone = this.thirdFormGroup.value.phoneNumber ?? '';

    this.http
      .post('https://localhost:7233/api/Customers/postCust', {
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        middleName: this.customer.middleName,
        emailAddress: this.customer.emailAddress,
        companyName: this.customer.companyName,
        phone: this.customer.phone,
        salesPerson: this.customer.salesPerson,
        title: this.customer.title,
        suffix: this.customer.suffix,
        passwordHash: this.customer.passwordHash,
        passwordSalt: this.customer.passwordSalt,
      })
      .subscribe({
        next: () => {
          this.cleanForm();
          alert('SIGN UP SUCCESSFUL, PLEASE LOGIN');
          this.router.navigate(['/signin']);
        },
        error: (error) => {
          alert('EMAIL ADDRESS ALREADY EXISTS, PLEASE USE ANOTHER ONE');
        },
        complete: () => {
          // define on request complete logic
          // 'complete' is not the same as 'finalize'!!
          // this logic will not be executed if error is fired
        },
      });
  };

  /* Clean Form Fields. Need to call it when you click the Sign Up Button */
  cleanForm = () => {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
  };
}
