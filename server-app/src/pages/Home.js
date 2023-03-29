import { React, useState, useEffect } from 'react';
import StartButton from '../components/StartButton';
import { Grid, Box, Typography } from '@mui/material';

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return (
        <div>
            <Grid className="App">
                <Grid>
                    <Typography variant='header'>Dashboard & Server Info</Typography>
                    <Box sx={{
                        display: 'flex',
                        height: 500,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        ml: '240px'
                    }}>
                        <h1>{message}</h1>
                        <StartButton/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}