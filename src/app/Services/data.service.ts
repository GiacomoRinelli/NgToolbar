import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import type { Customer } from '../Components/ProfileComponent/profile.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  ExampleCustomer: Customer = {
    customerId: 1,
    nameStyle: true,
    title: 'Mr.',
    firstName: 'John',
    middleName: 'M',
    lastName: 'Doe',
    suffix: 'Jr.',
    companyName: 'Acme',
    salesPerson: 'John Doe',
    emailAddress: 'baklbalb',
    phone: '123-456-7890',
    passwordSalt: '123456',
    passwordHash: '123456',
    rowguid: '123456',
    modifiedDate: '2021-01-01',
  };
}
