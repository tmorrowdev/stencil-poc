import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-icon',
  styleUrl: 'ds-icon.scss',
  scoped: true
})
export class MyIcon {
  @Prop() icon: string= '';
  @Prop() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled';
  @Prop() alt: string;
  @Prop () size:string;
  iconLocation = `@material-design-icons/svg/${this.iconStyle}/${this.icon}.svg`;
  render() {
    return (
      <div>
        <img src={this.iconLocation} class={'icon-size'+this.size}/>
      </div>
    )
  }
}
