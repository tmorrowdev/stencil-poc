import { Component, h, Prop } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  scoped: true,
})
export class DsButton {
  /**
   * Which type of button to render
   */
  @Prop() type: 'primary' | 'secondary' | 'tertiary'  = 'primary';

  /**
   * Choose the size of the button
   */
  @Prop() size: 'small' | 'large' = 'large';

  /**
   * Whether the button has fixed or autosized with
   */
  @Prop() width: 'auto' | 'full';


  @Prop() disabled: boolean = false;

  private handleClick = () => {
    alert('Received the button click!');
  }

  render() {
    const classMap = this.getCssClassMap();

    return (
      <button type={this.type} class={classMap} onClick={this.handleClick} disabled={this.disabled}>
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
