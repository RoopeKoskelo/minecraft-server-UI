import { React, useState, useEffect } from 'react';
import StartButton from '../components/StartButton';
import { Grid, Box, CssBaseline, Typography } from '@mui/material';

export default function Home() {
    const [message, setMessage] = useState("");

    function loadData() {
        fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }

    useEffect(() => {
        setInterval(() => {
            loadData();
          }, 1000);
    });

    return (
        <div>
            <CssBaseline/>
            <Grid className="App">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    ml: '240px'/*,
                    backgroundColor: 'lime'*/
                }}>
                    <Grid
                        container
                        padding={10}
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid
                            container
                            direction='column'
                            justifyContent= 'flex-start'
                            alignItems= 'flex-start'
                        >
                            <Typography variant='h4'>Dashboard & Server Info</Typography>
                        </Grid>
                        <Grid
                            bgcolor='#A6C990'
                            paddingY={5}
                            paddingX={50}
                            border={4}
                            borderColor='#ffffff'
                            borderRadius={15}
                            marginTop={10}
                        >
                        <Typography variant='p'>-{message}-</Typography>
                        <StartButton/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}