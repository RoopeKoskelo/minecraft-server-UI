import { React, useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';

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
            <Grid className="App">
                <Grid>
                    <Box sx={{
                        display: 'flex',
                        height: 500,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        ml: '240px'
                    }}>
                        <h1>{message}</h1>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}