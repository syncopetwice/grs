import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grs-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  public isDropdownVisible: Boolean = false;
  public isSelectedItemVisible: Boolean = false;

  @Output() itemSelect  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onItemSelect(): void {
    this.isDropdownVisible = false;
    this.isSelectedItemVisible = true;
    this.itemSelect.emit();
  }

}
