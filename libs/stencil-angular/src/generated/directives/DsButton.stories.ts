import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StencilAngularModule } from '../../stencil-angular.module';
import { DsButton } from './proxies';

export default {
  title: 'DsButton',
  component: DsButton,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, StencilAngularModule],
    })
  ]
} as Meta<DsButton>;

const Template: Story<DsButton> = (args: DsButton) => ({
  props: args,
  argTypes:{
    
      type: {
        options: ['primary', 'secondary', 'tertiary'],
        disabled: { type: 'radio' },
        width:['auto', 'full'],
        size:['small', 'large'],
        label: { type: 'text' }
      },
    },
  template: `<ds-button [type]="type" [size]="size" [width]="width" [disabled]="disabled">{{label}}</ds-button>`,
});


export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'large',
  width: 'auto',
  disabled: false,
  label: 'Primary Button'
}