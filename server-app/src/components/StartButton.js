import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function StartButton() {
    let [startstate ] = useState(false);
    

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

        const json = await data.json();
        
        if (json.error)
            alert(json.message);
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
        
        const json = await data.json();
        
        if (json.error)
            alert(json.message);
    }


    return(
    <Box display='flex' sx={{p: 4}}>
        <Button variant='contained' size= "large" color="secondary" onClick={startServer} sx={{mr: 5}}>
            Start Server
        </Button>
        <Button variant='contained' size= "large" color="secondary" onClick={exitServer} sx={{ml: 5}}>
            Shutdown Server
        </Button>
    </Box>
    )
}