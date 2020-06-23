import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingPage } from './saving.page';
import { AddSavingComponent } from './add-saving/add-saving.component';

const routes: Routes = [
  {
    path: '',
    component: SavingPage
  },
  {
    path: 'addSaving',
    component: AddSavingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavingPageRoutingModule {}
