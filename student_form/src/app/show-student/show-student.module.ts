import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowStudentPageRoutingModule } from './show-student-routing.module';

import { ShowStudentPage } from './show-student.page';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowStudentPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ShowStudentPage,UpdateStudentComponent]
})
export class ShowStudentPageModule {}
