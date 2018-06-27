import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'grs-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public isEditMode: Boolean = false;

  constructor(

  ) { }

  ngOnInit() {
  }

  onToggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

}
