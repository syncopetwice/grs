import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grs-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  public isSelectedItemVisible: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
