import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  showContent = true;

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
      name: 'Elyse',
      age: 25,
      job: 'Musician',
      employed: false,
    },
  ];
}
