import { newSpecPage } from '@stencil/core/testing';
import { DsIcon } from './ds-icon';

describe('ds-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DsIcon],
      html: '<ds-icon></ds-icon>',
    });
    expect(root).toEqualHtml(`
      <ds-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-icon>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DsIcon],
      html: `<ds-icon first="Stencil" last="'Don't call me a framework' JS"></ds-icon>`,
    });
    expect(root).toEqualHtml(`
      <ds-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-icon>
    `);
  });
});
