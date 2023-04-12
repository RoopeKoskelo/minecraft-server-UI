import { React, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { JsonEditor } from "react-jsondata-editor";
export default function Settings() {

    // all hail jsondataeditor https://www.npmjs.com/package/react-jsondata-editor/v/2.0.0 
    // en jaksa tehä ihan nollasta nii tää riittää :DDDD

    const [properties, setProperties] = useState({});

    let propsJSON = JSON.stringify(properties);
    let newProps = {};

    // hakee server.properties tiedot /getprops rajapinnasta
    function getProperties(){
        fetch("http://localhost:8000/getprops")
        .then((res) => res.json())
        .then((data) => setProperties(data));
    }
    
    useEffect(() => {
        getProperties();
    }, []);

    const sendProperties = async (event) => {
        event.preventDefault()
        console.log("Saving Properties...")
        const data = await fetch('http://localhost:8000/setprops',{
            method:'POST',
            headers: {
                'Content-Type': 'application/text'
            },
            body: JSON.stringify(newProps)
        });
    }

    return (
        <div>
            <Box sx={{
                padding: '65px'
            }}>
                <Button sx={{
                    ml: '240px',
                    justifyContent: 'center'
                }}onClick={sendProperties}>Save Properties</Button>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    ml: '240px',
                    backgroundColor: '#FFFFFF',
                }}>
                    <JsonEditor jsonObject={propsJSON} onChange={(output)=> {newProps = output; console.log(newProps)}} />
                </Box>
            </Box>
        </div>
    );
}