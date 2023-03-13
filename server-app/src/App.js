import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './components/Topbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StartButton from './components/StartButton';

function App() {
  return (
    <div className="App">
      <Box>
        <ButtonAppBar/>
      </Box>
      <Grid className="App">
        <Grid>
          <Box sx={{
            display: 'flex',
            height: 500,
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <StartButton/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
