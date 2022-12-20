import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import type { Product } from 'src/app/GlobalTypes/global-types.component';
import { Observable } from 'rxjs';

/* This component contains a table with all the products in the table Products from DB */

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  constructor(public ds: DataService) {}

  /* Variables */
  products: Product[] = [];
  isDataLoaded: boolean = false;

  /* With this get call, we get all the products informations, and we save'em into products */
  ngOnInit() {
    this.ds.getProducts().subscribe((resp) => {
      this.products = resp as Product[];
      this.isDataLoaded = true;
    });
  }
  //Print the products
  printProducts() {
    console.log(this.products);
  }

  isDataLoadedModifier() {
    this.isDataLoaded = true;
  }

  //////////////////////////// EXAMPLE FOR TABLE ////////////////////////////
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'productNumber',
    'color',
    'photo',
  ];

  dataSource = this.products;
}
