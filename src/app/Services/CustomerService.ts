import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { CustomerType } from 'src/app/GlobalTypes/global-types.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customerSubject = new BehaviorSubject<CustomerType>(
    {} as CustomerType
  );
  customer$ = this.customerSubject.asObservable();

  setCustomer(customer: CustomerType) {
    this.customerSubject.next(customer);
  }
}
