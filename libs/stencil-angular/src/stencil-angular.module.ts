import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DIRECTIVES} from './generated/directives/index';
import { defineCustomElements } from '@wc/stencil/loader';

defineCustomElements();
@NgModule({
  declarations: [],
  imports: [
    ...DIRECTIVES,
    CommonModule,
  ],
  exports: [...DIRECTIVES]
})
export class StencilAngularModule { }
