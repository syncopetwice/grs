import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'grs-transaction-header',
  templateUrl: './transaction-header.component.html',
  styleUrls: ['./transaction-header.component.scss']
})
export class TransactionHeaderComponent implements OnInit {

  constructor(
    public TS: TransactionService
  ) { }

  ngOnInit() {

  }

  onToggleMode() {
    this.TS.toggle();
  }

}
