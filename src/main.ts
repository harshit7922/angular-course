import {enableProdMode, importProvidersFrom} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HighlightedDirective } from './app/directives/highlighted.directive';
import { NgxUnlessDirective } from './app/directives/ngx-unless.directive';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    HighlightedDirective,
    NgxUnlessDirective
  ],
})
  .catch(err => console.log(err));
