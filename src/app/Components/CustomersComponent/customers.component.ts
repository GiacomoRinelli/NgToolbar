import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { CustomerType } from 'src/app/GlobalTypes/global-types.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  constructor(
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef
  ) {}

  /* Variables */
  customers: CustomerType[] = [];
  isDataLoaded: boolean = false;

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
            this.isDataLoaded = true;
            this.changeDetector.detectChanges(); //forcing a refresh of the view
          }
        },
        error: () => {
          alert('An unexpected error occurred. Please reload the page.');
        },
      });
  }
}
