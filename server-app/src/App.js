import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import ButtonSidebar from './components/Sidebar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StartSwitch from './components/StartSwitch';
import StartButton from './components/StartButton';

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
        <ButtonSidebar/>
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
            <StartButton/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
