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
  firstName: string = '';
  customer = {} as CustomerType;

  constructor(
    private jwtHelper: JwtHelperService,
    private customerService: CustomerService,
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit() {
    if (this.isUserAuthenticated()) {
      this.customer = JSON.parse(localStorage.getItem('customer')!);
      this.firstName = this.customer.firstName;
      this.changeDetector.markForCheck();
    }
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
    localStorage.removeItem('customer');
  }
}
