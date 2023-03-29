import { createTheme } from '@mui/material';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
      fontSize: 18,
      h1: {
        color: 'white',
        fontSize: '10'
      }
    },
    palette: {
      primary: {
        main: '#76BB74',
      },
      secondary: {
        main: '#F5F5F5',
      },
      info: {
        main: '#FFFFFF'
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
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#5E62D8',
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