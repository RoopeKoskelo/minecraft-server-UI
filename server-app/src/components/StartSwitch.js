import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { FormControlLabel, FormGroup } from '@mui/material';

export default function StartSwitch() {
    let [switchChecked, setChecked] = useState(false);

    const startServer = async (event) => {
        console.log("starting server...")
        event.preventDefault()
        let startstate = true
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
        console.log("shutting down server...")
        event.preventDefault()
        let startstate = false
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

    const checkHandler = async(event) => {
        setChecked(event.target.checked);

        if(switchChecked = true){
            startServer(event)
        }
        else if(switchChecked = false){
            exitServer(event);
        }
    }


    return(
    <Box display='flex'>
        <FormGroup>
            <FormControlLabel control={<Switch size="large" onChange={checkHandler} checked={switchChecked}/>} labelPlacement="top" label="Start Server"/>
        </FormGroup>
    </Box>
    )
}