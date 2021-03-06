
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import { TreeViewComponent } from './tree-view/tree-view.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStep1Component } from './wizard/wizard-step-1/wizard-step-1.component';
import { WizardStep2Component } from './wizard/wizard-step-2/wizard-step-2.component';
import { WizardStep3Component } from './wizard/wizard-step-3/wizard-step-3.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TabDataTableComponent } from './tabs/tab-data-table/tab-data-table.component';
import { PaginationComponent } from './pagination/pagination.component';

import { TransactionService } from './transactions/transaction.service';

import {
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTabsModule,
  MatListModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import 'hammerjs';

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
    LookupComponent,
    TreeViewComponent,
    WizardComponent,
    WizardStep1Component,
    WizardStep2Component,
    WizardStep3Component,
    MultiSelectComponent,
    DataTableComponent,
    TabDataTableComponent,
    PaginationComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [
    TransactionService,
    // {provide: MAT_DATE_LOCALE, useValue: 'gb-GB'},
    // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
