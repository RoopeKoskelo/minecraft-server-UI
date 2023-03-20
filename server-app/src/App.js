import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './components/Topbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StartSwitch from './components/StartSwitch';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

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
            <h1>{message}</h1>
            <StartSwitch/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
