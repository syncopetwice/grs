import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'grs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(150)
      ]),
      transition(':leave', [
        animate(150, style({
          transform: 'translateX(0)'
        }))
      ])
    ])
  ]
})

export class SidebarComponent implements OnInit {

  public isSidebarOpen: Boolean = false;
  public list = [];

  constructor() { }

  ngOnInit() {
    this.list = [
      {
        label: 'Accounts',
        icon: 'accounts'
      },
      {
        label: 'Client Invoices',
        icon: 'invoices'
      },
      {
        label: 'Contacts',
        icon: 'contacts'
      },
      {
        label: 'Purchase Orders',
        icon: 'orders'
      },
      {
        label: 'Shipping',
        icon: 'shipping'
      },
      {
        label: 'Accounts',
        icon: 'accounts'
      },
      {
        label: 'Client Invoices',
        icon: 'invoices'
      },
      {
        label: 'Contacts',
        icon: 'contacts'
      },
      {
        label: 'Purchase Orders',
        icon: 'orders'
      },
      {
        label: 'Shipping',
        icon: 'shipping'
      },
      {
        label: 'Accounts',
        icon: 'accounts'
      },
      {
        label: 'Client Invoices',
        icon: 'invoices'
      },
      {
        label: 'Contacts',
        icon: 'contacts'
      },
      {
        label: 'Purchase Orders',
        icon: 'orders'
      },
      {
        label: 'Shipping',
        icon: 'shipping'
      },
      {
        label: 'Accounts',
        icon: 'accounts'
      },
      {
        label: 'Client Invoices',
        icon: 'invoices'
      },
      {
        label: 'Contacts',
        icon: 'contacts'
      },
      {
        label: 'Purchase Orders',
        icon: 'orders'
      },
      {
        label: 'Shipping',
        icon: 'shipping'
      }
    ];
  }

}
