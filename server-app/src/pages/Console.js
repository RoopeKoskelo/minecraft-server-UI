import { React, useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';

export default function Home() {
    const [messages, setMessages] = useState([]);

    function loadData() {
        fetch("http://localhost:8000/logs")
        .then((res) => res.json())
        .then((data) => setMessages(data.messages));
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
                        {
                            messages.map((item) => {
                                return <p>{item}</p>
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}