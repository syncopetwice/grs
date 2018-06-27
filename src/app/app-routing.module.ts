import { ElementsComponent } from './shared/elements/elements.component';
import { TransactionsComponent } from './shared/transactions/transactions.component';
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
    redirectTo: '/transactions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
