import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DsButton } from '../generated/directives/proxies';
import { CommonModule } from '@angular/common';
import {StencilAngularModule} from '../stencil-angular.module';
import { DIRECTIVES } from '../generated/directives';

export default {
  title: 'DsButton',
  component: DsButton,
  styleUrls: ["../../../dist/libs/stencil/dist/collection/components/ds-button/ds-button.css"],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, StencilAngularModule],
    })
  ],
} as Meta<DsButton>;

const Template: Story<DsButton> = (args: DsButton) => ({
  props: args,
  argTypes:{
    type:
  }
  template: `<ds-button [type]="type" width="width" size="size" [disabled]="disabled]>{{label}}</ds-button>`
});


export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'large',
  width: 'auto',
  disabled: false,
  label: 'Click Me'
}
