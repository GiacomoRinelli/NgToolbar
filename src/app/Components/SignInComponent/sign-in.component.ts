import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from './SignInDialogComponent/sign-in-dialog/sign-in-dialog.component';

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
  constructor(private dialog: MatDialog) {}

  /* Variables */

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

  submitHandler() {}
}
