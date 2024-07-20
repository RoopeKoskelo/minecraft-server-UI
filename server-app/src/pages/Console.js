import { React, useState, useEffect, useRef } from 'react';
import { Box, TextField } from '@mui/material';

export default function Home() {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    function loadData() {
        fetch("http://localhost:8000/logs")
        .then((res) => res.json())
        .then((data) => setMessages(data.messages))
    }

    async function sendData() {
        console.log(value)
        const data = await fetch('http://localhost:8000/console',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ value: value })
        })
        const json = await data.json();
        
        if (json.error){
            alert(json.message);
        };

        console.log(json)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`Command ${value} entered.`);
        sendData();
        setValue('');
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
                }}>
                    {
                        messages.map((item) => {
                            return <p>{item}</p>
                        })
                    }
                    <div ref={messagesEndRef} />
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField 
                            fullWidth
                            focused
                            id="command"  
                            color="secondary" 
                            label="Enter Command Here" 
                            variant="standard"
                            value={value}
                            onChange={(e)=>setValue(e.target.value)} 
                            sx={{ input: {color: '#FFFFFF'}}}/>
                    </form>
                </Box>
            </Box>
        </div>
    );
}