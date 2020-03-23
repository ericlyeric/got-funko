/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import App from './components/App';
import './index.css';
import styles from './components/common/styles';

render(
  <Router>
    <ThemeProvider theme={styles}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('app'),
);
