import { newSpecPage } from '@stencil/core/testing';
import { DsAccordian } from './ds-accordian';

describe('ds-accordian', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DsAccordian],
      html: '<ds-accordian></ds-accordian>',
    });
    expect(root).toEqualHtml(`
      <ds-accordian>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-accordian>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DsAccordian],
      html: `<ds-accordian first="Stencil" last="'Don't call me a framework' JS"></ds-accordian>`,
    });
    expect(root).toEqualHtml(`
      <ds-accordian first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-accordian>
    `);
  });
});
