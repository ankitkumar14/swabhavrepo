import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { OurModule } from './welcome/welcome.module';
//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowserDynamic().bootstrapModule(OurModule)
  .catch(err => console.error(err));
