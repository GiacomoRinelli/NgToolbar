import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  ItemList = [
    { name: 'Home', icon: 'fa-solid fa-house', link: '/' },
    { name: 'SignUp', icon: 'fa-solid fa-user-plus', link: '/signup' },
    { name: 'Shop', icon: 'fa-solid fa-cart-shopping', link: '/shop' },
  ];

  SecondItemList = [
    {
      name: 'SignIn',
      icon: 'fa-solid fa-arrow-right-to-bracket',
      link: '/signin',
    },
    { name: 'Profile', icon: 'fa-solid fa-user', link: '/profile' },
    { name: 'Customers', icon: 'fa-solid fa-people-roof', link: '/customers' },
  ];

  ThirdItemList = [
    { name: 'About', icon: 'fa-solid fa-info-circle', link: '/about' },
    { name: 'Contact', icon: 'fa-solid fa-phone', link: '/contact' },
  ];

  constructor() {}
}
