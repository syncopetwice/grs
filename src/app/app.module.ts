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
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
