import { TransactionService } from './transactions/transaction.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TabsComponent } from './tabs/tabs.component';
import { ActionComponent } from './action/action.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TableComponent } from './table/table.component';
import { RadioComponent } from './radio/radio.component';
import { ModalComponent } from './modal/modal.component';
import { SelectComponent } from './select/select.component';
import { IconActionComponent } from './icon-action/icon-action.component';
import { UploaderComponent } from './uploader/uploader.component';
import { IconComponent } from './icon/icon.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ElementsComponent } from './elements/elements.component';
import { TransactionHeaderComponent } from './transactions/transaction-header/transaction-header.component';
import { TransactionBodyComponent } from './transactions/transaction-body/transaction-body.component';
import { TransactionFooterComponent } from './transactions/transaction-footer/transaction-footer.component';
import { TabDetailsComponent } from './tabs/tab-details/tab-details.component';
import { TabFinishesComponent } from './tabs/tab-finishes/tab-finishes.component';
import { TabLaborComponent } from './tabs/tab-labor/tab-labor.component';
import { LookupComponent } from './lookup/lookup.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    InputComponent,
    TextareaComponent,
    TabsComponent,
    ActionComponent,
    PreloaderComponent,
    ToggleComponent,
    TableComponent,
    RadioComponent,
    ModalComponent,
    SelectComponent,
    IconActionComponent,
    UploaderComponent,
    IconComponent,
    TransactionsComponent,
    ElementsComponent,
    TransactionHeaderComponent,
    TransactionBodyComponent,
    TransactionFooterComponent,
    TabDetailsComponent,
    TabFinishesComponent,
    TabLaborComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
