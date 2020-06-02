import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { welcomeRoutingModule } from './welcome-routing.module';
import { welcomeComponent } from './welcome.component';
import { ch } from './child/child.component';
import { mp } from '../source/cap.pipe';
import { sumnum } from '../source/add.services';

@NgModule({
  declarations: [
    welcomeComponent,
    ch,
    mp
    
  ],
  imports: [
    BrowserModule,
    welcomeRoutingModule
  ],
  providers: [sumnum],
  bootstrap: [welcomeComponent]
})
export class OurModule { }