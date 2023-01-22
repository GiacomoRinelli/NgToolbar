import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { CustomerType } from 'src/app/GlobalTypes/global-types.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  customer = {} as CustomerType;
  isCustomerLoaded: boolean = false;
  customerIdInput: string = '';
  customers: CustomerType[] = [];
  found: boolean = false;
  falseFlag: boolean = false;

  headers = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + localStorage.getItem('jwt')
  );

  ngOnInit() {
    this.http
      .get('https://localhost:7233/api/Customers', { headers: this.headers })
      .subscribe({
        next: (response) => {
          this.customers = response as CustomerType[];

          //Changing the date format
          this.customers.map((customer) => {
            const date = new Date(customer.modifiedDate);
            customer.modifiedDate = date.toLocaleDateString('it-IT', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            });
          });
          if (this.customers.length > 0) {
            this.isCustomerLoaded = true;
            this.cdr.detectChanges(); //forcing a refresh of the view
          }
        },
        error: () => {
          alert('An unexpected error occurred. Please reload the page.');
        },
      });
  }

  formGroup = new FormGroup({
    customerId: new FormControl(this.customer.customerId, [
      Validators.required,
    ]),
    firstName: new FormControl(this.customer.firstName, [Validators.required]),
    middleName: new FormControl(this.customer.middleName),
    lastName: new FormControl(this.customer.lastName, [Validators.required]),
    title: new FormControl(this.customer.title),
    nameStyle: new FormControl(this.customer.nameStyle),
    suffix: new FormControl(this.customer.suffix),
    companyName: new FormControl(this.customer.companyName, [
      Validators.required,
    ]),
    salesPerson: new FormControl(this.customer.salesPerson, [
      Validators.required,
    ]),
    emailAddress: new FormControl(this.customer.emailAddress, [
      Validators.required,
    ]),
    phone: new FormControl(this.customer.phone, [Validators.required]),
    passwordHash: new FormControl(this.customer.passwordHash, [
      Validators.required,
    ]),
    passwordSalt: new FormControl(this.customer.passwordSalt, [
      Validators.required,
    ]),
    rowguid: new FormControl(this.customer.rowguid, [Validators.required]),
    //disable the modifiedDate field
    modifiedDate: new FormControl({
      value: this.customer.modifiedDate,
      disabled: true,
    }),
    customerAddresses: new FormControl(this.customer.customerAddresses),
    salesOrderHeaders: new FormControl(this.customer.salesOrderHeaders),
  });

  updateCustomerID(event: any) {
    this.customerIdInput = event.target.value;
  }

  getCustomer() {
    this.found = false;
    this.customers.find((cust) => {
      if (cust.customerId.toString() == this.customerIdInput) {
        this.customer = cust;
        this.formGroup.patchValue(this.customer);
        this.found = true;
      }
    });
    if (!this.found) {
      alert('Customer not found');
    }
  }

  submitForm() {
    //   this.http
    //     .put(
    //       'https://localhost:7233/api/Customers/' + this.customer.customerId,
    //       this.customer,
    //       { headers: this.headers }
    //     )
    //     .subscribe({
    //       next: () => {
    //         alert('Customer updated successfully');
    //       },
    //       error: () => {
    //         alert('An unexpected error occurred. Please reload the page.');
    //       },
    //     });
  }

  deleteCustomer() {
    this.http
      .delete(
        'https://localhost:7233/api/Customers/deleteCust/' +
          this.customer.customerId,
        { headers: this.headers }
      )
      .subscribe({
        next: () => {
          alert('Customer deleted successfully');
        },
        error: () => {
          alert('An unexpected error occurred. Please reload the page.');
        },
      });
  }
}
