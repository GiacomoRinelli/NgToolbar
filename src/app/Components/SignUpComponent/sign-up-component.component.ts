import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { CustomerType } from '../../GlobalTypes/global-types.component';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css'],
})
export class SignUpComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

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
    rowguid: '',
    suffix: '',
    modifiedDate: '',
    nameStyle: false,
    customerAddresses: [],
    salesOrderHeaders: [],
  };

  /* Clean Form Fields. Need to call it when you click the Sign Up Button */
  cleanForm = () => {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
  };

  //ToDo handle format for email and password
}
