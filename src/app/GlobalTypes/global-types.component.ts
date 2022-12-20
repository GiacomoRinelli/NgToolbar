import { Component } from '@angular/core';

export type CustomerAddress = {
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

export type CustomerType = {
  customerId: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  title?: string;
  nameStyle: false;
  suffix?: string; //
  companyName: string;
  salesPerson: string;
  emailAddress: string;
  phone: string;
  passwordHash: string; //
  passwordSalt: string; //
  rowguid: string; //
  modifiedDate: string; //
  customerAddresses?: any[];
  salesOrderHeaders?: any[];
};

export type Product = {
  productId: number;
  name: string;
  productNumber: string;
  color?: string;
  standardCost: number;
  listPrice: number;
  size?: string;
  weight?: number;
  productCategoryId: number;
  productModelId: number;
  sellStartDate: string;
  sellEndDate?: string;
  discontinuedDate: any;
  thumbNailPhoto: string;
  thumbnailPhotoFileName: string;
  rowguid: string;
  modifiedDate: string;
  productCategory: any;
  productModel: any;
  salesOrderDetails: any[];
};

@Component({
  selector: 'app-global-types',
  templateUrl: './global-types.component.html',
  styleUrls: ['./global-types.component.css'],
})
export class GlobalTypesComponent {
  constructor() {}

  ngOnInit(): void {}
}
