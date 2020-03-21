/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import Logo from '../../../assets/got-funko-logo.png';
import styles from '../common/styles';

const styleCenter = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5rem',
  maxWidth: '25rem',
};

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={styles}>
        <Container className={classes.heroContent} maxWidth="md">
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Game of Thrones Funko Tracker
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Simple application to keep track of the Game of Thrones
            Funko pops that you&apos;re collecting. Gotta collect em
            all!
          </Typography>
          <Grid
            className={classes.heroButtons}
            container
            spacing={2}
            justify="center"
          >
            <Grid item>
              <Button variant="contained" color="primary">
                Sign-in
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Sign-up
              </Button>
            </Grid>
          </Grid>
          <img
            className="logo"
            src={Logo}
            alt="got-funko-logo"
            style={styleCenter}
          />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
