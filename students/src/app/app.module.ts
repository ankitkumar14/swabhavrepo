import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { getdata } from 'src/services/getstudent.service';
import { HttpClientModule } from '@angular/common/http';
import { deletedata } from 'src/services/deletestudent.service';
import { adddata } from 'src/services/addstudent.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowstudentComponent,
    AddstudentComponent,
    NotfoundComponent,
    NavbarComponent,
    DeletestudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [getdata,deletedata,adddata],
  bootstrap: [AppComponent]
})
export class AppModule { }
