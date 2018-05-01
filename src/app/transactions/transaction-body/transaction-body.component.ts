import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grs-transaction-body',
  templateUrl: './transaction-body.component.html',
  styleUrls: ['./transaction-body.component.scss']
})
export class TransactionBodyComponent implements OnInit {

  @Input() isEditMode: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
