import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';


const routes: Routes = [
  {path:'' , component:ShowstudentComponent},
  {path:'showstudent' , component:ShowstudentComponent},
  {path:'deletestudent/:id' , component:DeletestudentComponent},
  {path:'updatestudent/:id' , component:UpdatestudentComponent},
  {path:'addstudent' , component:AddstudentComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
