import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-table',
  styleUrl: 'ds-table.scss',
  scoped: true
})
export class DsTable {
  @Prop() headers: string[];

  render() {
    return (
      <table>
        <tr>
          {this.headers.map(header => (
            <th>{header}</th>
          ))}
        </tr>
        <slot />
      </table>
    );
  }
}