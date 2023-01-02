import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {DsButton, DsCard, DsInput, DsAccordion, DsTable} from '@stencil/react';
import { defineCustomElements } from '@wc/stencil/loader';
defineCustomElements(window);
export const headers=['header1', 'header2', 'header3']

 export default function App(){
    return(
      <>

          <DsButton type="primary" size="large" width="auto" label="Button" disabled={false}></DsButton>
          <DsButton type="secondary" size="large" width="auto" label="Button" disabled={false}></DsButton>
          <DsButton type="tertiary" size="large" width="auto" label="Button" disabled={false}></DsButton>
          <DsButton type="emphasized" size="large" width="auto" label="Button" disabled={false}></DsButton>

          <DsButton type="primary" size="large" width="auto" label="Button" disabled={true}></DsButton>


          <DsButton type="primary" size="small" width="auto" label="Button" disabled={false}></DsButton>
          <DsButton type="secondary" size="small" width="auto" label="Button" disabled={false}></DsButton>
          <DsButton type="tertiary" size="small" width="auto" label="Button" disabled={false}></DsButton>
          <DsButton type="emphasized" size="small" width="auto" label="Button" disabled={false}></DsButton>

          <DsButton type="primary" size="small" width="auto" label="Button" disabled={true}></DsButton>

          <DsButton type="primary" size="large" width="full" label="Button" disabled={false}></DsButton>
          <DsButton type="secondary" size="large" width="full" label="Button" disabled={false}></DsButton>
          <DsButton type="tertiary" size="large" width="full" label="Button" disabled={false}></DsButton>
          <DsButton type="emphasized" size="large" width="full" label="Button" disabled={false}></DsButton>

          <DsButton type="primary" size="large" width="full" label="Button" disabled={true}></DsButton>

          <DsButton type="primary" size="small" width="full" label="Button" disabled={false}></DsButton>
          <DsButton type="secondary" size="small" width="full" label="Button" disabled={false}></DsButton>
          <DsButton type="tertiary" size="small" width="full" label="Button" disabled={false}></DsButton>
          <DsButton type="emphasized" size="small" width="full" label="Button" disabled={false}></DsButton>

          <DsButton type="primary" size="small" width="full" disabled></DsButton>

      <DsInput></DsInput>
      <DsAccordion description="Content that goes in the Accordion"></DsAccordion>
      <DsTable headers={headers}><tr><td>hi</td><td>hi</td><td>hi</td></tr></DsTable>
      <DsCard subtitle="Card Subtitle" cardTitle="Card Title"></DsCard>
     </>
    );
   
}


