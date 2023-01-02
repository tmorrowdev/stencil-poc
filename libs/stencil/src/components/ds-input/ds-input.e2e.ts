import { newE2EPage } from '@stencil/core/testing';

describe('ds-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ds-input></ds-input>');
    const element = await page.find('ds-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the value data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ds-input></ds-input>');
    const component = await page.find('ds-input');
    const element = await page.find('ds-input >>> input');
    const value = element.getAttribute('value');
    expect(element.textContent).toEqual(``);

    component.triggerEvent('valueChange', { detail: 'Hello, World!' });
    await page.waitForChanges();
    expect(value).toEqual(`Hello, World!`);
  });
});
