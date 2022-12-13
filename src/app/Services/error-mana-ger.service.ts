import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorManagerService {
  constructor(private http: HttpClient) {}

  GlobalAppErrorManager(
    error: any,
    methodName: string,
    componentName: string
  ) {
    this.http
      .post('https://localhost:7094/api/ErrorLogTables', {
        message: error,
        methodName: methodName,
        componentName: componentName,
        Date: new Date(),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
