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
    label: 'Installations',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque quasi alias quo nesciunt mollitia neque ex blanditiis nostrum cupiditate.
    `
  }, {
    id: 2,
    label: 'Schedule',
    content: `
     Schedule Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque quasi alias quo nesciunt mollitia neque ex blanditiis nostrum cupiditate.
    `
  }];

  constructor() { }

  ngOnInit() {
  }

  setTab(id:number) {
    this.currentTabId = id;
  }




}
