import { React, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { JsonEditor } from "react-jsondata-editor";
import theme from '../theme';
export default function Settings() {

    // all hail jsondataeditor https://www.npmjs.com/package/react-jsondata-editor/v/2.0.0 
    // en jaksa tehä ihan nollasta nii tää riittää :D

    const [properties, setProperties] = useState({});

    let propsJSON = JSON.stringify(properties);
    let newProps = propsJSON;

    // hakee server.properties tiedot /getprops rajapinnasta
    function getProperties(){
        fetch("http://localhost:8000/props")
        .then((res) => res.json())
        .then((data) => setProperties(data));
    }
    
    useEffect(() => {
        getProperties();
    }, []);

    const sendProperties = async (event) => {
        event.preventDefault()
        console.log(propsJSON)
        console.log("Saving Properties...")
        await fetch('http://localhost:8000/props',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProps)
        })
        .then(window.location.reload(false));
    }

    return (
        <div>
            <Box sx={{
                padding: '65px'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    ml: '240px',
                    backgroundColor: '#FFFFFF',
                }}>
                    <JsonEditor jsonObject={propsJSON} onChange={(output)=> {newProps = JSON.parse(output); console.log(newProps)}} />
                </Box>
                <Box sx={{
                    bgcolor: theme.palette.primary.main,
                    ml: 'auto',
                    width: '25%',
                    border: 2,
                    borderColor: '#ffffff',
                    borderRadius: 5,
                    mt: 5,
                }}>
                    <Button sx={{
                        boxSizing: 'border-box',
                        color: theme.palette.primary.text,
                        justifyContent: 'center',
                        width: '100%'
                    }}onClick={sendProperties}>Save Properties</Button>
                </Box>
            </Box>
        </div>
    );
}