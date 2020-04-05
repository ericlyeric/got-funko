/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Home from '../../../assets/house-of-lannister.png';
import styles from './styles';
import './Common.css';

const Navigation = () => {
  return (
    <>
      <ThemeProvider theme={styles}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Icon style={{ fontSize: '0rem' }}>
                  <Link to="/">
                    <img
                      className="home"
                      src={Home}
                      alt="home-button"
                      style={{ maxWidth: '2.5rem' }}
                    />
                  </Link>
                </Icon>
              </Grid>
              <Grid item>
                <Button id="login-button" color="inherit">
                  <Link to="/login">Login</Link>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navigation;
