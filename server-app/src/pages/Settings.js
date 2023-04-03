import { React, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

export default function Settings() {

    const [properties, setProperties] = useState({});

    function getProperties(){
        fetch("http://localhost:8000/getprops")
        .then((res) => res.json())
        .then((data) => setProperties(data));
    }
    
    useEffect(() => {
        getProperties();
    }, []);

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
            </Box>
        </div>
    );
}