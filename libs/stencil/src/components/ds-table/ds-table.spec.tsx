import { newSpecPage } from '@stencil/core/testing';
import { DsTable } from './ds-table';

describe('ds-table', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DsTable],
      html: '<ds-table></ds-table>',
    });
    expect(root).toEqualHtml(`
      <ds-table>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-table>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DsTable],
      html: `<ds-table first="Stencil" last="'Don't call me a framework' JS"></ds-table>`,
    });
    expect(root).toEqualHtml(`
      <ds-table first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-table>
    `);
  });
});
