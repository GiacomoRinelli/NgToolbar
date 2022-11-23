import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('openCloseSignUp', [
      state(
        'open',
        style({
          height: '280px',
          opacity: 1,
          backgroundColor: '#3f51b5',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0.5,
          backgroundColor: '#ff4081',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('2s')]),
    ]),
    trigger('openCloseShowRegisteredUsers', [
      state(
        'open',
        style({
          height: '280px',
          opacity: 1,
          backgroundColor: '#3f51b5',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0.5,
          backgroundColor: '#ff4081',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('2s')]),
    ]),
  ],

})
export class HomePageComponent {
  /* Variables */
  isSignUpButtonOpen = false;
  signUpButtonLabelState = false;
  PeopleListButtonLabelState = false;
  isPeopleListShown = false;

  people = [
    {
      name: 'John',
      age: 25,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'Jill',
      age: 30,
      job: 'Engineer',
      employed: true,
    },
    {
      name: 'Tonino',
      age: 35,
      job: 'Pescatore',
      employed: false,
    },
    {
      name: 'Cosimo',
      age: 15,
      job: 'Direttore',
      employed: false,
    },
    {
      name: 'Giovanni',
      age: 21,
      job: 'Studente',
      employed: false,
    },
    {
      name: 'Mario',
      age: 40,
      job: 'Ingegnere',
      employed: true,
    },
    {
      name: 'Luigi',
      age: 45,
      job: 'Ingegnere',
      employed: true,
    },
  ];

  /* Functions */
  ShowFormHandler() {
    this.isSignUpButtonOpen = !this.isSignUpButtonOpen;
    this.signUpButtonLabelState = !this.signUpButtonLabelState;
  }

  ShowOrHidePeopleHandler() {
    this.PeopleListButtonLabelState = !this.PeopleListButtonLabelState;
    this.isPeopleListShown = !this.isPeopleListShown;
  }

  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // options = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });
  // constructor(private _formBuilder: FormBuilder) {}

  // getFloatLabelValue(): FloatLabelType {
  //   return this.floatLabelControl.value || 'auto';
  // }
}
