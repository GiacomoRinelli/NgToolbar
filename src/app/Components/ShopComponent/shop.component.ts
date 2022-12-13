import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import type { Customer } from '../ProfileComponent/profile.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  constructor(public ds: DataService) {}

  //print out the customer name from the data service
  ngOnInit(): void {
    console.log(this.ds.ExampleCustomer);
  }
}
