import { newSpecPage } from '@stencil/core/testing';
import { DsInput } from './ds-input';


describe('ds-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DsInput],
      html: '<ds-input></ds-input>',
    });
    expect(root).toEqualHtml(`
      <ds-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ds-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DsInput],
      html: `<ds-input first="Stencil" last="'Don't call me a framework' JS"></ds-input>`,
    });
    expect(root).toEqualHtml(`
      <ds-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ds-input>
    `);
  });
});
