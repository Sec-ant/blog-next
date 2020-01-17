import React, { Component } from 'react';
import { Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#1B1D20',
      focus: '#0D9CD3',
      'status-critical': '#F04953',
      'status-error': '#F04953',
      'status-warning': '#FFD144',
      'status-ok': '#0D9CD3'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
