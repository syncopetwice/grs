import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grs-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public currentTabId: Number = 1;

  tabs = [{
    id: 1,
    label: 'Details'
  }, {
    id: 2,
    label: 'Finishes'
  },
  {
    id: 3,
    label: 'Labor'
  },
  {
    id: 4,
    label: 'Shipping'
  },
  {
    id: 5,
    label: 'Adjustments'
  },
  {
    id: 6,
    label: 'Purchase Orders'
  },
  {
    id: 7,
    label: 'Schedule'
  },
  {
    id: 8,
    label: 'Client Invoices'
  },
  {
    id: 9,
    label: 'Payments'
  },
  {
    id: 10,
    label: 'Finance'
  },
  {
    id: 11,
    label: 'Chatter'
  },
  {
    id: 12,
    label: 'Documents'
  },
  {
    id: 13,
    label: 'Logs'
  }
];

  constructor() { }

  ngOnInit() {
  }

  setTab(id:number) {
    this.currentTabId = id;
  }




}
