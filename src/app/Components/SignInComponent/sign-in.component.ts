import { Component } from '@angular/core';
import { Form } from '@angular/forms';

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
  constructor() {}

  credentials: Credentials = {
    email: '',
    password: '',
  };

  //we can also use $event to update our variables

  updateEmail(e: any) {
    this.credentials.email = e.target.value;
  }

  updatePassword(e: any) {
    this.credentials.password = e.target.value;
  }

  submitHandler() {
    console.log(this.credentials);
  }
}
