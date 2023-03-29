import { React, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

export default function Settings() {
    let [check, setCheck] = useState(false);
    

    const checkWork = async (event) => {
        console.log("starting server...")
        event.preventDefault()
        check = true
        console.log(check)
        const data = await fetch('http://localhost:8000/settings',{
            method:'POST',
            headers:{
                'accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({check})
        })
        console.log(data)
        check = false;
    }

    return (
        <div>
            <Box sx={{
                display: 'flex',
                height: 500,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                ml: '240px'
            }}>
                <h1>shittings :D</h1>
                <Button variant='contained' size= "large" color="secondary" onClick={checkWork}>
                check work :D
                </Button>
            </Box>
        </div>
    );
}