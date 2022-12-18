import { newSpecPage } from '@stencil/core/testing';
import { TextInput } from './text-input';

describe('text-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TextInput],
      html: '<text-input></text-input>',
    });
    expect(root).toEqualHtml(`
      <text-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </text-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TextInput],
      html: `<text-input first="Stencil" last="'Don't call me a framework' JS"></text-input>`,
    });
    expect(root).toEqualHtml(`
      <text-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </text-input>
    `);
  });
});
