import { colors, createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: 'Arial',
      fontSize: 18
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
  });

export default theme;