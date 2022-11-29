import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { DsButton } from '@dst/react';
import { defineCustomElements } from '@wc/stencil/loader';
defineCustomElements();
export function App() {

    return(
      <>
      <div className="button-large-auto">
      <DsButton type="primary" size="large" width="auto" disabled={false}>Button</DsButton>
      <DsButton type="secondary" size="large" width="auto" disabled={false}>Button</DsButton>
      <DsButton type="tertiary" size="large" width="auto" disabled={false}>Button</DsButton>
      <DsButton type="secondary" size="large" width="auto" disabled={true}>Button</DsButton>

      </div>
      <div className="button-small-auto">
        <DsButton type="primary" size="small" width="auto" disabled={false}>Button</DsButton>
        <DsButton type="secondary" size="small" width="auto" disabled={false}>Button</DsButton>
        <DsButton type="tertiary" size="small" width="auto" disabled={false}>Button</DsButton>
        <DsButton type="secondary" size="small" width="auto" disabled={true}>Button</DsButton>

      </div>
      <div className="button-large-full">
        <DsButton type="primary" size="large" width="full" disabled={false}>Button</DsButton>
        <DsButton type="secondary" size="large" width="full" disabled={false}>Button</DsButton>
        <DsButton type="tertiary" size="large" width="full" disabled={false}>Button</DsButton>
        <DsButton type="secondary" size="large" width="full" disabled={true}>Button</DsButton>

        </div>
        <div className="button-small-full">
          <DsButton type="primary" size="small" width="full" disabled={false}>Button</DsButton>
          <DsButton type="secondary" size="small" width="full" disabled={false}>Button</DsButton>
          <DsButton type="tertiary" size="small" width="full" disabled={false}>Button</DsButton>
          <DsButton type="secondary" size="small" width="full" disabled={true}>Button</DsButton>

        </div>
        </>
    )

}

export default App;
