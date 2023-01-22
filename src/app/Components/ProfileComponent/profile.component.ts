import { Component, OnInit } from '@angular/core';
import { CustomerType } from '../../GlobalTypes/global-types.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  customer = {} as CustomerType;
  formattedDate = '';

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem('customer')!);
    const date = new Date(this.customer.modifiedDate);
    this.formattedDate = date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    this.changeDetector.detectChanges();
  }
}
