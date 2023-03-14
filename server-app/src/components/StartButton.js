import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function StartButton() {
    let [startstate, setStartstate] = useState("false");

    useEffect(() => {
      fetch("http://localhost:8000/start")
        .then((res) => res.json())
        .then((data) => setStartstate('false'));
    }, []);

    return(
    <Box display='flex'>
        <Button variant='contained' size= "large" color="secondary" onClick={() => setStartstate('true')}>
            Start Server
        </Button>
        <h2>{startstate}</h2>
    </Box>
    )
}