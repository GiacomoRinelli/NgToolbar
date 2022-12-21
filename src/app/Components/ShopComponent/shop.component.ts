import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import type { Product } from 'src/app/GlobalTypes/global-types.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  /* Variables */
  products: Product[] = [];
  isDataLoaded: boolean = false;

  constructor(
    private ds: DataService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.ds.getProducts().subscribe((data) => {
      this.products = data as Product[];
      if (this.products.length > 0) {
        this.isDataLoaded = true;
        this.changeDetector.detectChanges(); //forcing a refresh of the view
      }
    });
  }
}
