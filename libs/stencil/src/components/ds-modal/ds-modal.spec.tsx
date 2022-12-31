import { newSpecPage } from '@stencil/core/testing';
import { DsModal } from './ds-modal';

describe('ds-modal', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DsModal],
      html: '<ds-modal></ds-modal>',
    });
    expect(root).toEqualHtml(`
      <ds-modal>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-modal>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DsModal],
      html: `<ds-modal first="Stencil" last="'Don't call me a framework' JS"></ds-modal>`,
    });
    expect(root).toEqualHtml(`
      <ds-modal first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-modal>
    `);
  });
});
