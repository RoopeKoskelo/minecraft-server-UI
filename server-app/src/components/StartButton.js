import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function StartButton() {
    const { spawn } = require('node:child_process');

    let [state, setState] = useState(false);

    function startServer(){
        spawn('cmd.exe', ['/c', 'C:\Users\Oppilas1\Desktop\VS kamat\MineservuPOGOY\server-files\start.bat']);
    }

    useEffect(() => {
        if (state = true){
            startServer()
        return
        }
    });

    return(
    <Box display='flex'>
        <Button variant='contained' size= "large" color="secondary" onClick={() => setState(true)}>
            Start Server
        </Button>
    </Box>
    )
}