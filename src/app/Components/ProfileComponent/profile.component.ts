import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorManagerService } from '../../Services/error-mana-ger.service';
import {
  CustomerType,
  CustomerAddress,
} from '../../GlobalTypes/global-types.component';
import { CustomerService } from 'src/app/Services/CustomerService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  private customerSubscription: Subscription = new Subscription(); // sottoscrivi l'observabile customer$ invece di customerId$
  customer = {} as CustomerType;

  constructor(
    private http: HttpClient,
    private errorManager: ErrorManagerService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerSubscription = this.customerService.customer$.subscribe(
      (customer: CustomerType) => {
        this.customer = customer;
        //maybe need to add some refresh for the view
        //this.changeDetector.markForCheck(); //forcing a refresh of the view
        console.log(this.customer);
      }
    );
  }
}
