import { h } from '@stencil/core';
import { DsModal } from './ds-modal';
export default {
  title: 'DsModal',
  component: DsModal,
};

const Template = (args) => <ds-modal {...args}></ds-modal>;

export const Primary = Template.bind({});
Primary.args = { first: 'Hello', last: 'World' };
