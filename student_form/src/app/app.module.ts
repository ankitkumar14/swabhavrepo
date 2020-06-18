import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GetdataService } from './getdata.service';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
  ],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule,FormsModule,CommonModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GetdataService,HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
