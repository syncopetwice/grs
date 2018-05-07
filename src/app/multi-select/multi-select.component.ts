import { Component, OnInit } from '@angular/core';

interface Option {
  label: string;
  selected: boolean;
}

@Component({
  selector: 'grs-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  isDropdownVisible: Boolean = false;

  options: Array<Option> = [];
  selected: Array<Option> = [];

  constructor() { }

  ngOnInit() {
    this.options = [{
      label: 'Salesforce Inc.',
      selected: false
    }];
  }

  onOptionSelect() {
    this.isDropdownVisible = false;
    this.options = [{
      label: 'Salesforce Inc.',
      selected: true
    }];
    this.selected = [{
      label: 'Salesforce Inc.',
      selected: true
    }];
  }

  onRemoveSelected() {
    this.options = [{
      label: 'Salesforce Inc.',
      selected: false
    }];
    this.selected = [];
  }

}
