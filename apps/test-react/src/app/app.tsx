import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { DsButton } from '@stencil/react';

export function App() {
  
    return(
    <>
      <DsButton type="primary" size="large" width="auto" disabled={false}>I'm a Button</DsButton>
    
      </>
    )
   
}

export default App;
