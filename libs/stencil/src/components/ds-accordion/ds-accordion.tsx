import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-accordion',
  styleUrl: 'ds-accordion.scss',
  shadow: true
})

export class MyComponent {

  @State() _toggle: boolean = false;

  @Event() toggle: EventEmitter;

  @Prop() label: string;

  @Prop() description: string;

  @Prop() width: string;

  @Prop() color: string;

  toggleComponent() {
    this._toggle = !this._toggle;
    this.toggle.emit({ visible: this._toggle });
  }

  render() {

    return (
      <div>
      <button class="accordion"
      style={{
        width: this.width,
        backgroundColor: this.color,
      }}
      onClick={() => this.toggleComponent()}>
      {this.label}
      {this._toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
      </button>
      <div class={`content-box ${this._toggle ? 'open' : 'close'}`}
      style={{width: this.width}}>
      <p>{this.description}</p>
      </div>
      </div>
    )
  }
}