import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  scoped: true,
})
export class DsButton {
  @Prop() label: string;
  /**
   * Which type of button to render
   */
  
  @Prop() type: 'primary' | 'secondary' | 'tertiary' | 'emphasized'  = 'primary';

  /**
   * Choose the size of the button
   */
  @Prop() size: 'small' | 'large' = 'large';

  /**
   * Whether the button has fixed or autosized with
   */
  @Prop() width: 'auto' | 'full';


  @Prop() disabled: boolean = false;

 

  render() {
    const classMap = this.getCssClassMap();

    return (
      <button class={classMap}  disabled={this.disabled}>
       <slot/>
       {this.label}
       <slot />
      </button>
    );
  }

  private getCssClassMap(): CssClassMap {
    return {

      [this.type]: true,
      [this.size]: true,
      [this.width]: true
    };
  }
}
