import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-icon',
  styleUrl: 'ds-icon.scss',
  scoped: true
})
export class MyIcon {
  @Prop() name: string= '';
  @Prop() color: string;
  @Prop () size:string;
  render() {
    return (
      <div>
        <ion-icon name={this.name} style={{ fontSize: `${this.size}px`, color: this.color }}></ion-icon>
      </div>
    )
  }
}
