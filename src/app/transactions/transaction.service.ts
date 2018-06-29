import { Injectable } from '@angular/core';

@Injectable()
export class TransactionService {

  public isEditMode: Boolean = false;

  constructor() {}

  toggle() {
    this.isEditMode = !this.isEditMode;
  }

}
