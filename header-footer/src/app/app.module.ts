import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headercomponent } from './header/header.component';
import { footercomponent } from './footer/footer.component';
import { AnkitheaderDirective } from './ankitheader.directive';
import { AnkitfooterDirective } from './ankitfooter.directive';

@NgModule({
  declarations: [
    AppComponent,
    headercomponent,
    footercomponent,
    AnkitheaderDirective,
    AnkitfooterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
