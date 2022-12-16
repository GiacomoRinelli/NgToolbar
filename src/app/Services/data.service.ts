import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import type { CustomerType } from '../GlobalTypes/global-types.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
}
