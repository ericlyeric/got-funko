/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Navigation = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button id="login-button" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
