import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grs-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.scss']
})
export class TabDetailsComponent implements OnInit {

  public isEditMode: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
