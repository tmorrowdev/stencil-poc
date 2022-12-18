import { h } from '@stencil/core';
import {DsButton} from './ds-button';



export default {
  title: 'TableComponent',
  component: DsButton,
};

const Template = (args) => <ds-button {...args}>Button</ds-button>;

export const PrimaryLargeAutosize = Template.bind({});
PrimaryLargeAutosize.args = { type: 'primary', width: 'auto', size: 'large'  };
