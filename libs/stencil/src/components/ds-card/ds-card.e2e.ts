import { newE2EPage } from '@stencil/core/testing';

describe('ds-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ds-card></ds-card>');
    const element = await page.find('ds-card');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ds-card></ds-card>');
    const component = await page.find('ds-card');
    const element = await page.find('ds-card >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
