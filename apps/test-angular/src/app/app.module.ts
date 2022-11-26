import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StencilAngularModule} from '@wc/angular';
import { defineCustomElements } from '@wc/stencil/loader';

defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StencilAngularModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
