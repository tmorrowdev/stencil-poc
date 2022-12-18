import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DIRECTIVES} from './generated/directives';
import { defineCustomElements } from '@wc/stencil/loader';

defineCustomElements();
@NgModule({
  declarations: [...DIRECTIVES],
  imports: [
    CommonModule,
  ],
  exports: [...DIRECTIVES]
})
export class StencilAngularModule { }
