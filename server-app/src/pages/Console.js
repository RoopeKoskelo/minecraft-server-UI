import { React, useState, useEffect, useRef } from 'react';
import { Grid, Box } from '@mui/material';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    function loadData() {
        fetch("http://localhost:8000/logs")
        .then((res) => res.json())
        .then((data) => setMessages(data.messages))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        setInterval(() => {
            loadData();
          }, 1000);
        messagesEndRef.current.scrollIntoView();
    });

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
                }}>
                    {
                        messages.map((item) => {
                            return <p>{item}</p>
                        })
                    }
                    <div ref={messagesEndRef} />
                </Box>
            </Box>
        </div>
    );
}