import { newSpecPage } from '@stencil/core/testing';
import { DsCard } from './ds-card';

describe('ds-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DsCard],
      html: '<ds-card></ds-card>',
    });
    expect(root).toEqualHtml(`
      <ds-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-card>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DsCard],
      html: `<ds-card first="Stencil" last="'Don't call me a framework' JS"></ds-card>`,
    });
    expect(root).toEqualHtml(`
      <ds-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-card>
    `);
  });
});
