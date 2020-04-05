/* eslint-disable import/no-extraneous-dependencies */
import { createMuiTheme } from '@material-ui/core/styles';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFC107

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff350',
      main: '#ffc107',
      dark: '#c79100',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
});

export default theme;
