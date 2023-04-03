import { createTheme } from '@mui/material';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
      fontSize: 18,
      h1: {
        color: 'white',
        fontSize: '10'
      },
      header: {
        color: 'white',
        align: 'right'
      },
    },
    palette: {
      secondary: {
        main: '#F5F5F5',
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