import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-accordian',
  styleUrl: 'ds-accordian.scss',
  scoped: true,
})
export class DsAccordian {
  @Prop() panelTitle: string;
  @Prop() panelBody: any;

  render() {
    return (
      <div class="sc-ds-accordian">
        <fw-accordian type="Default" title={this.panelTitle} body={this.panelBody} class="sc-ds-accordian">
         
        </fw-accordian>
      </div>
    );
  }
}
