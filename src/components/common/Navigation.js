/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core';
import styles from './styles';

const Navigation = () => {
  return (
    <>
      <ThemeProvider theme={styles}>
        <AppBar position="static">
          <Toolbar>
            <Button id="login-button" color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navigation;
