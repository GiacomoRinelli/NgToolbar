import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
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

  registeredUsers = [
    {
      userName: 'John195',
      password: '123456',
      birthDay: '01/01/1950',
      email: 'johndoe@gmail.com',
    },
  ];

  addUserHandler() {
    this.registeredUsers.push({
      userName: this.firstFormGroup.value.firstCtrl as string,
      password: this.secondFormGroup.value.secondCtrl as string,
      birthDay: this.thirdFormGroup.value.thirdCtrl as string,
      email: this.fourthFormGroup.value.fourthCtrl as string,
    });
  }

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
}
