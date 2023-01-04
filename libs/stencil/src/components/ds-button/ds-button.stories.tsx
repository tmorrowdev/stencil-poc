import { h } from '@stencil/core';
import { defineCustomElements } from '@wc/stencil/loader';

defineCustomElements(window)

export default {
  title: 'DsButton',
  component: 'DsButton',
  args: {
    type: { control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'emphasized'] } },
    size: { control: { type: 'select', options: ['small', 'large'] } },
    width: { control: { type: 'select', options: ['auto', 'full'] } },
    disabled: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } }
  }
};

const Template = (args) => {
return (<ds-button {...args}></ds-button>)};

export const PrimaryLargeAutosize = Template.bind({});
PrimaryLargeAutosize.args = { type: 'primary', width: 'auto', size: 'large', disabled:false, label: 'Button' };
