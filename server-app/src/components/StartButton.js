import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function StartButton() {
    let [startstate, setStartstate] = useState(false);
    

    const startServer = async (event) => {
        console.log("starting server...")
        event.preventDefault()
        startstate = true
        console.log(startstate)
        const data = await fetch('http://localhost:8000/start',{
            method:'POST',
            headers:{
                'accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({startstate})
        })
        console.log(data)
    }

    const exitServer = async (event) => {
        console.log("starting server...")
        event.preventDefault()
        startstate = false
        console.log(startstate)
        const data = await fetch('http://localhost:8000/start',{
            method:'POST',
            headers:{
                'accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({startstate})
        })
        console.log(data)
    }


    return(
    <Box display='flex'>
        <Button variant='contained' size= "large" color="secondary" onClick={startServer}>
            Start Server
        </Button>
        <Button variant='contained' size= "large" color="secondary" onClick={exitServer}>
            Shutdown Server
        </Button>
        <h2></h2>
    </Box>
    )
}