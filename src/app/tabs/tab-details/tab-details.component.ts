import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../transactions/transaction.service';

@Component({
  selector: 'grs-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.scss']
})
export class TabDetailsComponent implements OnInit {

  public isSetSupplierModalOpen: Boolean = false;
  public isPreloaderActive: Boolean = true;

  constructor(
    public TS: TransactionService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isPreloaderActive = false;
    }, 500);
  }

  onItemSelect(): void {

  }

}
