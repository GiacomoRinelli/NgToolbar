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
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: '#3399FF',
        })
      ),
      state(
        'closed',
        style({
          height: '18px',
          opacity: 0.5,
          backgroundColor: 'blueviolet',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')]),
    ]),
  ],
})
export class HomePageComponent {
  /* Variables */
  showContent = true;
  hidingButton = true;
  isOpen = true;

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
  toggle() {
    this.hidingButton = !this.hidingButton;
    this.isOpen = !this.isOpen;
  }
}
