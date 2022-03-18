import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor, secondaryColor } from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,

    },
    secondary: {
      main: secondaryColor,
    },
    neutral: {
      main: neutralColor,
    },
    white: {
      main: "#ffffff"
    },
    text: {
      primary: neutralColor
    }
  },
  typography: {

    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme