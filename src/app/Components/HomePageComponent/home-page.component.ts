import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerService } from 'src/app/Services/CustomerService';
import type { CustomerType } from 'src/app/GlobalTypes/global-types.component';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  private customerSubscription: Subscription = new Subscription(); // sottoscrivi l'observabile customer$ invece di customerId$
  customerID: number = 0;
  firstName: string = '';

  constructor(
    private jwtHelper: JwtHelperService,
    private customerService: CustomerService,
    private changeDetector: ChangeDetectorRef, // inietta l'oggetto ChangeDetectorRef
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.customerSubscription = this.customerService.customer$.subscribe(
      (customer: CustomerType) => {
        this.firstName = customer.firstName; // imposta la variabile firstName con il valore del campo firstName del customer
        this.changeDetector.markForCheck(); //forcing a refresh of the view
      }
    );
  }

  isUserAuthenticated() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('jwt');
  }
}
