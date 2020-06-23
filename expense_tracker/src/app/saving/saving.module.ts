import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavingPageRoutingModule } from './saving-routing.module';

import { SavingPage } from './saving.page';
import { AddSavingComponent } from './add-saving/add-saving.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavingPageRoutingModule
  ],
  declarations: [SavingPage,AddSavingComponent]
})
export class SavingPageModule {}
