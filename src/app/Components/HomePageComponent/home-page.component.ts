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
      transition('closed => open', [animate('1s')]),
    ]),
    trigger('openCloseShowRegisteredUsers', [
      state(
        'open',
        style({
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
      transition('closed => open', [animate('1s')]),
    ]),
    trigger('openCloseCalculator', [
      state(
        'open',
        style({
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
      transition('closed => open', [animate('1s')]),
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
      transition('closed => open', [animate('1s')]),
    ]),
    trigger('openCloseClaudioExercise', [
      state(
        'open',
        style({
          height: '400px',
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
      transition('closed => open', [animate('1s')]),
    ]),
    trigger('openCloseClaudiosContentExercise', [
      state(
        'open',
        style({
          height: '350px',
          opacity: 1,
          backgroundColor: '#8E8481',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0.5,
          backgroundColor: 'yellow',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')]),
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

  claudioExerciseButtonLabelState: boolean = false;
  isClaudioExerciseOpen: boolean = false;

  people = [
    {
      name: 'John',
      password: '123',
    },
    {
      name: 'Jill',
      password: '456',
    },
  ];

  /* Buttons Functions */
  ShowFormHandler() {
    this.signUpButtonLabelState = !this.signUpButtonLabelState;
    this.isSignUpButtonOpen = !this.isSignUpButtonOpen;
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

  ShowOrHideClaudioExerciseHandler() {
    this.claudioExerciseButtonLabelState =
      !this.claudioExerciseButtonLabelState;
    this.isClaudioExerciseOpen = !this.isClaudioExerciseOpen;
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

  /* Form Variables And Functions */

  userName: string = '';
  password: string = '';

  userNameHandler(event: any) {
    this.userName = event.target.value;
  }

  passwordHandler(event: any) {
    this.password = event.target.value;
  }

  submitHandler() {
    this.people.push({
      name: this.userName,
      password: this.password,
    });
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

  //--------------------------------------------------------------------------------

  /* Variables for Claudio Exercise */

  isClaudioContentButtonOpen: boolean = false;
  isClaudioContentButtonLabelState: boolean = false;
  stringaDiInterpolazione: string = 'Sono una stringa di interpolazione';
  isButtonDisabled: boolean = true;
  contenutoTesto: string = '';

  /* Functions for Claudio Exercise */
  ShowOrHideClaudioContentButtonHandler() {
    this.isClaudioContentButtonOpen = !this.isClaudioContentButtonOpen;
    this.isClaudioContentButtonLabelState =
      !this.isClaudioContentButtonLabelState;
  }

  inputTextHandler(event: any) {
    this.contenutoTesto = event.target.value;
    if (this.contenutoTesto.length > 0) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  buttonClickHandler() {
    alert('Hai cliccato il bottone');
  }

  TWBInputText: string = '';

  /* Variables for Claudio's lecture on 28/11/2022 */
  hasFormBegan: boolean = false;
  statusChanged: boolean = true;

  changeStatus() {
    this.statusChanged = !this.statusChanged;
  }

  colorState: boolean = true;
  changeColorState() {
    this.colorState = !this.colorState;
  }
}
