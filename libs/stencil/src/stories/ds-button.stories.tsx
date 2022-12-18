import { storiesOf } from '@storybook/web-components';
import {Components} from '@wc/stencil';


storiesOf('DsButton', module)
  .add('Primary button', () => {
    return (`
    <ds-button type="primary" width="auto" size="large">Click me</ds-button>`);
  })
  .add('Secondary button', () => {
    return `<ds-button type="secondary" width="auto" size="large">Click me</ds-button>`;
  });