import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Type Imports */
import type { Product } from '../GlobalTypes/global-types.component';
import type { CustomerType } from '../GlobalTypes/global-types.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /* Get call from the Product table */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:7233/api/Products');
  }

  

}
