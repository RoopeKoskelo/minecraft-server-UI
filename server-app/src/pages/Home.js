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
                <Box sx={{
                    display: 'flex',
                    height: 500,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    ml: '240px'
                }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="stretch"
                    >
                        <Typography variant='header'>Dashboard & Server Info</Typography>
                        <Typography variant='header'>{message}B</Typography>
                        <StartButton/>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}