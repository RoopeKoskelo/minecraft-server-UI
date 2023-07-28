import { React, useState, useEffect, useRef } from 'react';
import { Grid, Box, TextField } from '@mui/material';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    function loadData() {
        fetch("http://localhost:8000/logs")
        .then((res) => res.json())
        .then((data) => setMessages(data.messages))

    }

    useEffect(() => {
        setInterval(() => {
            loadData();
            messagesEndRef.current.scrollIntoView();
          }, 1000);
    }, []);

    return (
        <div>
            <Box sx={{
                padding: '65px',
            }}>
                <Box sx={{
                    flex: 1,
                    padding: '45px',
                    ml: '240px',
                    maxHeight: '800px',
                    bgcolor: '#020202',
                    color: '#FFFFFF',
                    borderRadius: 4,
                    overflowY: 'scroll',
                }}
                noValidate
                autoComplete="off">
                    {
                        messages.map((item) => {
                            return <p>{item}</p>
                        })
                    }
                    <div ref={messagesEndRef} />
                    <TextField 
                    fullWidth
                    focused
                    id="standard-basic"  
                    color="secondary" 
                    label="Enter Command Here" 
                    variant="standard" />
                </Box>
            </Box>
        </div>
    );
}