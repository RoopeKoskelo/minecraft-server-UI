import { createTheme } from '@mui/material';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
      fontSize: 20,
      h1: {
        color: 'white',
        fontSize: '8'
      },
      h4: {
        color: 'white',
        textDecoration: 'underline',
        textDecorationColor: '#76BB74'
      },
      p: {
        color: 'white',
        fontSize: 40,
      }
    },
    palette: {
      primary: {
        main: '#76BB74',
        text: 'white',
        header: '#85ABE4'
      },
      secondary: {
        main: '#F5F5F5'
      },
      background: {
        default: '#262C28'
      }
    },
    components: {
      MuiListItemText: {
        styleOverrides: {
          root: {
            color: 'white'
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: '#76BB74',
          }
        }
      }
    }
  });

export default theme;