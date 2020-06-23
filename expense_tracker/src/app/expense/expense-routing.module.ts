import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensePage } from './expense.page';
import { AddExpenseComponent } from './add-expense/add-expense.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensePage
  },
  {
    path: 'addExpense',
    component: AddExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensePageRoutingModule {}
