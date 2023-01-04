import {h } from '@stencil/core';
import { defineCustomElements } from '@wc/stencil/loader';

defineCustomElements(window)

export default {
  title: 'DsIcon',
  component: 'ds-icon',
  args: {
    icon: { control: { type: 'text' } },
    iconStyle: { control: { type: 'select', options: ['filled', 'outlined', 'round', 'sharp', 'two-tone'] } },
    size: { control: { type: 'number' } }
  }
};

const Template = (args) => <ds-icon {...args}></ds-icon>;

export const HomeIcon = Template.bind({});
HomeIcon.args = { icon: 'home',iconStyle: "filled" , size: '16px'};
