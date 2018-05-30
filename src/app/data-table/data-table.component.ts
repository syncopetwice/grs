import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grs-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  rows;
  headers;

  constructor() { }

  ngOnInit() {
    this.rows = [
      {
        sku: 'MT951/BRN',
        item: 'Mini Garbage Collector',
        quantity: 1,
        purchaseOrder: '#151246425198',
        price: 78,
        totalPrice: 120,
        case: true,
        status: 'Estimate Sent',
        clientBillingStatus: 'awaiting',
        supplierBillingStatus: 'confirmed',
      },
      {
        sku: 'MT951/BRN',
        item: 'Mini Garbage Collector',
        quantity: 1,
        purchaseOrder: '#151246425198',
        price: 78,
        totalPrice: 120,
        case: false,
        status: 'Estimate Sent',
        clientBillingStatus: 'awaiting',
        supplierBillingStatus: 'confirmed',
      },
      {
        sku: 'MT951/BRN',
        item: 'Mini Garbage Collector',
        quantity: 1,
        purchaseOrder: '#151246425198',
        price: 78,
        totalPrice: 120,
        case: true,
        status: 'Estimate Sent',
        clientBillingStatus: 'awaiting',
        supplierBillingStatus: 'confirmed',
      },
      {
        sku: 'MT951/BRN',
        item: 'Mini Garbage Collector',
        quantity: 1,
        purchaseOrder: '#151246425198',
        price: 78,
        totalPrice: 120,
        case: false,
        status: 'Estimate Sent',
        clientBillingStatus: 'awaiting',
        supplierBillingStatus: 'confirmed',
      },
    ];

    this.headers = Object.keys(this.rows[0]);
    this.headers = this.headers.map(i => i.replace(/([A-Z])/g, ' $1').trim());
    console.log(this.headers);

  }

}
