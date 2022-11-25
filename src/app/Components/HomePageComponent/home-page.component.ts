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
    trigger('openCloseCalculator', [
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
    trigger('openCloseTwoWaysBindingCalculator', [
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
  signUpButtonLabelState: boolean = false;
  isSignUpButtonOpen: boolean = false;

  PeopleListButtonLabelState: boolean = false;
  isPeopleListShown: boolean = false;

  calculatorButtonLabelState: boolean = false;
  isCalculatorOpen: boolean = false;

  twoWBCalculatorButtonLabelState: boolean = false;
  isTwoWBCalculatorOpen: boolean = false;

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

  /* Buttons Functions */
  ShowFormHandler() {
    this.isSignUpButtonOpen = !this.isSignUpButtonOpen;
    this.signUpButtonLabelState = !this.signUpButtonLabelState;
  }

  ShowOrHidePeopleHandler() {
    this.PeopleListButtonLabelState = !this.PeopleListButtonLabelState;
    this.isPeopleListShown = !this.isPeopleListShown;
  }

  ShowOrHideCalculatorHandler() {
    this.calculatorButtonLabelState = !this.calculatorButtonLabelState;
    this.isCalculatorOpen = !this.isCalculatorOpen;
  }

  ShowOrHideTwoWBCalculatorHandler() {
    this.twoWBCalculatorButtonLabelState =
      !this.twoWBCalculatorButtonLabelState;
    this.isTwoWBCalculatorOpen = !this.isTwoWBCalculatorOpen;
  }

  /* $Event Calculator variables */
  FirstAdding: string = '0';
  SecondAdding: string = '0';
  OperationSign: string = '';

  /* Variables for TWBinding Calculator */
  TWBFirstAdding: string = '0';
  TWBSecondAdding: string = '0';
  TWBOperationSign: string = '';

  /* Functions for $event calculator */
  FirstAddingHandler(event: any) {
    this.FirstAdding = event.target.value;
  }

  SecondAddingHandler(event: any) {
    this.SecondAdding = event.target.value;
  }

  OperationSignHandler(event: any) {
    this.OperationSign = event.value;
  }

  ResultHandler() {
    let result: number = 0;
    switch (this.OperationSign) {
      case 'add':
        result = parseFloat(this.FirstAdding) + parseFloat(this.SecondAdding);
        break;
      case 'substract':
        result = parseFloat(this.FirstAdding) - parseFloat(this.SecondAdding);
        break;
      case 'multiply':
        result = parseFloat(this.FirstAdding) * parseFloat(this.SecondAdding);
        break;
      case 'divide':
        result = parseFloat(this.FirstAdding) / parseFloat(this.SecondAdding);
        break;
    }
    return result;
  }

  /* Functions for TWBinding Calculator */

  /* As we can see, the main difference between using a TWBinding and a $event
     is in the fact that we use 3 less functions to get the same result */

  TWBResultHandler() {
    let result: number = 0;
    switch (this.TWBOperationSign) {
      case 'add':
        result =
          parseFloat(this.TWBFirstAdding) + parseFloat(this.TWBSecondAdding);
        break;
      case 'substract':
        result =
          parseFloat(this.TWBFirstAdding) - parseFloat(this.TWBSecondAdding);
        break;
      case 'multiply':
        result =
          parseFloat(this.TWBFirstAdding) * parseFloat(this.TWBSecondAdding);
        break;
      case 'divide':
        result =
          parseFloat(this.TWBFirstAdding) / parseFloat(this.TWBSecondAdding);
        break;
    }
    return result;
  }
}
