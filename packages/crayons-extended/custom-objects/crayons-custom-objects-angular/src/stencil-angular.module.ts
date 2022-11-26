import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  DIRECTIVES } from './generated/directives';


@NgModule({
  declarations: [DIRECTIVES],
  imports: [
    CommonModule,
  ],
  exports: [DIRECTIVES]
})
export class StencilAngularModule { }
