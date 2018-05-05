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
    label: 'Wizard'
  },
  {
    id: 3,
    label: 'Tree View'
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
  }
];

  constructor() { }

  ngOnInit() {
  }

  setTab(id:number) {
    this.currentTabId = id;
  }




}
