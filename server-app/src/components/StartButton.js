import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function StartButton() {
    return(
    <Box display='flex'>
        <Button variant='contained' size= "large" color="secondary">
            Start Server
        </Button>
    </Box>
    )
}