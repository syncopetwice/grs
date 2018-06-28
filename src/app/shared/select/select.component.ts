import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grs-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public suppliers = [];

  constructor() { }

  ngOnInit() {
    this.suppliers = [{
      id: 'v124v124',
      value: 'Josh'
    }, {
      id: 'v124v12c24',
      value: 'Carl'
    }, {
      id: 'v124v1vafs24',
      value: 'Jack'
    }];
  }

}
