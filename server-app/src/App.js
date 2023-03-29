import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Settings from './pages/Settings';
import Console from './pages/Console';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="settings" element={<Settings />}/>
          <Route path="console" element={<Console />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/* BACKUP JOS KUSEE :))
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
  */