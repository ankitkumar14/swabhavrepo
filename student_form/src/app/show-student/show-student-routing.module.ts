import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowStudentPage } from './show-student.page';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path: '',
    component: ShowStudentPage
  },
  {
    path: ':id',
    component: DeleteStudentComponent
  },
  {
    path: 'delete/:id',
    component:UpdateStudentComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowStudentPageRoutingModule {}
