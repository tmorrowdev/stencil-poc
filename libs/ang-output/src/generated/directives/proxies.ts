/* eslint-disable @typescript-eslint/no-empty-interface */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@wc/stencil';
import { CommonModule } from '@angular/common';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export declare interface DsButton extends Components.DsButton {
  size:"small" | "large";
  disabled:boolean;
  type: "primary"|"secondary"|"tertiary";
  width: "auto" | "full";
}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'size', 'type', 'width']
})
@Component({
  selector: 'ds-button',
  standalone:true,
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<button *ngClass="size+' '+type +' '+width" [disabled]="disabled"><ng-content></ng-content></button>`,
})
export class DsButton {
  @Input() size:"small" | "large" = "large";
  @Input() disabled=false
  @Input() type: "primary"|"secondary"|"tertiary"="primary";
  @Input() width: "auto" | "full" = "auto";
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
