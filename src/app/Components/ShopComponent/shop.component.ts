import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import type { Product } from 'src/app/GlobalTypes/global-types.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  /* Functions */

  ngOnInit() {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('jwt')
    );

    this.http
      .get('https://localhost:7233/api/Products', { headers: headers })
      .subscribe({
        next: (response) => {
          this.products = response as Product[];
          if (this.products.length > 0) {
            this.isDataLoaded = true;
            this.changeDetector.detectChanges(); //forcing a refresh of the view
          }
        },
        error: (err) => {
          alert('An unexpected error occurred.');
        },
      });
  }
}
