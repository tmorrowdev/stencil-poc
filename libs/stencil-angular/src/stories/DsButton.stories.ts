import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StencilAngularModule } from '@stencil/angular';
import { DsButton } from '../generated/directives/proxies';
import { defineCustomElements } from '@wc/stencil/loader';
import { useArgTypes } from '@storybook/angular/node_modules/@storybook/api';
defineCustomElements();
export default {
  title: 'DsButton',
  component: DsButton,
  argTypes:{
    
     
    brand: {
      control: 'select',
      options:['esrx' , 'evernorth' , 'pharmacy','accredo']
    },
    type: {
      control: 'select',
      options:['primary', 'secondary', 'tertiary', 'emphasized']
    },
    disabled: { type: 'boolean' },
    width:{
      control: 'radio',
      options: ['auto', 'full']
    },
    size:{
      control: 'radio',
       options:['small', 'large']
    },
    label: 
    { control: 'text'}
},
  decorators: [
    moduleMetadata({
      imports: [CommonModule, StencilAngularModule]
    })
  ]
} as Meta<DsButton>;

const Template: Story<DsButton> = (args: DsButton) => ({
  props: args,
  args:useArgTypes,
  template: `<div class="{{brand}}-theme sc-ds-button"><ds-button  [type]="type" [size]="size" [width]="width" [disabled]="disabled">{{label}}</ds-button></div>`,
});


export const Primary = Template.bind({});
Primary.args = {
  brand: 'evernorth',
  type: 'primary',
  size: 'large',
  width: 'auto',
  disabled: false,
  label: 'Primary Button'
}