import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorManagerService } from '../../Services/error-mana-ger.service';
import { CustomerType } from '../../GlobalTypes/global-types.component';
import { CustomerService } from 'src/app/Services/CustomerService';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  private customerSubscription: Subscription = new Subscription(); // sottoscrivi l'observabile customer$ invece di customerId$
  customer = {} as CustomerType;
  formattedDate = '';

  constructor(
    private http: HttpClient,
    private errorManager: ErrorManagerService,
    private customerService: CustomerService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.customerSubscription = this.customerService.customer$.subscribe(
      (customer: CustomerType) => {
        this.customer = customer;
        //changing the date format into dd/mm/yyyy
        const date = new Date(this.customer.modifiedDate);
        this.formattedDate = date.toLocaleDateString('it-IT', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
        this.changeDetector.markForCheck(); //forcing a refresh of the view
      }
    );
  }

  //Delete Customer
  deleteCustomer() {
    console.log('delete customer');
  }

  //Update Customer
  updateCustomer() {
    console.log('update customer');
  }
}
