import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorManagerService } from '../../Services/error-mana-ger.service';

export type Customer = {
  customerId?: number;
  nameStyle: boolean;
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: any;
  companyName: string;
  salesPerson: string;
  emailAddress: string;
  phone: string;
  passwordHash: string;
  passwordSalt: string;
  rowguid?: string;
  modifiedDate: string;
};

/* Type for instore data from api method getCustAddr  */
type CustomerAddress = {
  addressId: number;
  addressLine1: string;
  addressLine2: any;
  city: string;
  stateProvince: string;
  countryRegion: string;
  postalCode: string;
  rowguid: string;
  modifiedDate: string;
  customerAddresses: any[];
  salesOrderHeaderBillToAddresses: any[];
  salesOrderHeaderShipToAddresses: any[];
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isShowEmployeesListShown = false;
  customers: Customer[] = [];
  customerAddresses: CustomerAddress[] = [];
  customerID: number = -1;
  custNames: string[] = [];

  constructor(
    private http: HttpClient,
    private errManager: ErrorManagerService
  ) {}

  customerIdHandler(event: any) {
    this.customerID = event.target.value;
  }

  /* This func is a brutality */
  findCustomerNameByID() {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId == this.customerID) {
        this.custNames.push(this.customers[i].firstName);
        this.custNames.push(this.customers[i].lastName);
        this.showEmployeesList();
        return 0;
      }
    }
    return -1;
  }

  /* Api functions */

  /* With this get call, we get all the customers informations, and we save'em into customers */
  ngOnInit() {
    this.http.get('https://localhost:7233/api/Customers').subscribe((resp) => {
      this.customers = resp as Customer[];
    });
  }

  /* Variables for user input */
  postFirstName: string = '';
  postLastName: string = '';
  postEmail: string = '';
  postCompanyName: string = '';

  deleteCustomerId: number = -1;
  putCustomerId: number = -1;

  /* With this get call, we get all the customers addresses informations, and we save'em into customerAddresses */
  getCustAddr() {
    this.http
      .get(
        'https://localhost:7233/api/Customers/getCustAddr/' + this.customerID
      )
      .subscribe(
        (resp) => {
          this.customerAddresses = resp as CustomerAddress[];
        },
        (error) => {
          this.logError(error);
        }
      );
    this.findCustomerNameByID();
  }

  /* Post Call (it works, but can be ofc improved) */

  exampleCustomer: Customer = {
    customerId: 30119,
    firstName: 'John',
    lastName: 'Doe',
    companyName: 'Doe Inc.',
    emailAddress: 'blabla@gmail.com',
    passwordHash: '123456',
    passwordSalt: '123456',
    phone: '123456789',
    salesPerson: 'John Doe',
    title: 'Mr.',
    nameStyle: true,
    middleName: 'Doe',
    suffix: 'Doe',
    modifiedDate: '2021-05-05T00:00:00',
  };

  postFirstNameHandler(event: any) {
    this.postFirstName = event.target.value;
  }

  postLastNameHandler(event: any) {
    this.postLastName = event.target.value;
  }

  postEmailHandler(event: any) {
    this.postEmail = event.target.value;
  }

  postCompanyNameHandler(event: any) {
    this.postCompanyName = event.target.value;
  }

  putCustomerIdHandler(event: any) {
    this.putCustomerId = event.target.value;
  }

  deleteCustomerIdHandler(event: any) {
    this.deleteCustomerId = event.target.value;
  }

  postCust() {
    this.http
      .post('https://localhost:7233/api/Customers/postCust', {
        firstName: this.postFirstName,
        lastName: this.postLastName,
        emailAddress: this.postEmail,
        companyName: this.postCompanyName,
        passwordHash: this.exampleCustomer.passwordHash,
        passwordSalt: this.exampleCustomer.passwordSalt,
      })
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  /* Put Call (it works, but can be ofc improved) */
  putCust(id: number) {
    this.http
      .put(
        'https://localhost:7233/api/Customers/putCust/' + this.exampleCustomer,
        {}
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  /* Delete Call (it works, but can be ofc improved) */
  deleteCust() {
    this.http
      .delete(
        'https://localhost:7233/api/Customers/deleteCust/' +
          this.deleteCustomerId
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  showEmployeesList() {
    this.isShowEmployeesListShown = !this.isShowEmployeesListShown;
  }

  //METHODS FOR LOG ERROR TABLE EXAMPLE
  logError(error: any) {
    this.errManager.GlobalAppErrorManager(
      error.message,
      'ProfileComponent',
      'getCustAddr'
    );
  }
}
