import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-accordion',
  styleUrl: 'ds-accordion.scss',
  scoped: true
})


export class DsAccordion  {
  
  @State() _toggle: boolean = false;
  @Event() toggle: EventEmitter;

 @Prop() buttonLabel:string='Dropdown'

  @Prop() description: string;

  


   toggleComponent() {
    this._toggle = !this._toggle;
    this.toggle.emit({ visible: this._toggle });
  }

  render() {

    return (
      <div>
     <ds-Button type="secondary" size="large" width="auto" 
      onClick={() => this.toggleComponent()}>
<span>{this.buttonLabel}</span>
{ (this._toggle ? <span>&#9650;</span> : <span>&#9660;</span>)}
      </ds-Button>
      <div class={`content-box ${this._toggle ? 'open' : 'close'}`}>
      <p>{this.description}</p>
      </div>
      </div>
    )
  }
}