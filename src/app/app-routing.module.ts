import { ElementsComponent } from './elements/elements.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },
  {
    path: '',
    redirectTo: '/elements',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
