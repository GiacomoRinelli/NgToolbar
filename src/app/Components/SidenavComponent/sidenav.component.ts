import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  ItemList = [
    { name: 'Home', icon: 'fa-solid fa-house', link: '/' },
    { name: 'Shop', icon: 'fa-solid fa-cart-shopping', link: '/shop' },
    {
      name: 'SignIn',
      icon: 'fa-solid fa-arrow-right-to-bracket',
      link: '/signin',
    },
    { name: 'SignUp', icon: 'fa-solid fa-user-plus', link: '/signup' },
  ];

  constructor() {}

}
