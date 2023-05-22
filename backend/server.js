const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const properties = require("properties");

app.use(cors());
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var last_state = false;

app.get('/message', (req, res) => {
    res.json({ message: last_state ? "Server is running" : "Server is not running" }); // näytä sivulle onko serveri päällä
});

//start server nappi

var minecraftProcess;
var console_messages = [];

app.get('/logs', (req, res) => {
    res.json({ messages: console_messages }); // console ikkunan logit /logs sivulle
});

app.post('/start', async (req, res) => {

    let startdata = await req.body.startstate

    const { spawn } = require('child_process');

    if (last_state == startdata) {
        const message = last_state ? "Server is already started!!" : "You already stopped the server once!!"; // heittää alertin jos yrität saman actionin uudestaan
        return res.json({ message: message, error: true });
    }

    last_state = startdata;

    if(startdata === true) {

        minecraftProcess = spawn('java', [      
            '-jar',
            '-Xmx1024m',
            '-Xms1024m',
            'server.jar',
        ], { cwd: 'server' });

        minecraftProcess.stdout.setEncoding('utf8');
        minecraftProcess.stdout.on('data', (data) => {          // tekee console ikkunan logit
            const text = data.trim();
            console_messages.push(text);
            console.log(text);
        });

        return res.json({ message: 'Started server', error: false });
    }
    else if(startdata === false){ 
        minecraftProcess.stdin.write("stop\n");
        console.log("shutting down...");
        return res.json({ message: 'Stopped server', error: false });
    }
});

// server.properties handlaaminen (dear god)

app.get('/props', async (req, res) => {  
    properties.parse('../backend/server/server.properties', { path: true }, function(error, data){
        return res.json(data); // returnaa json muodossa server propertiesin
    })
})

app.post('/props', async (req, res) => {   
    let ndata = req.body;
    console.log(ndata)
    
    properties.stringify(ndata, { path: '../backend/server/server.properties' }, function(error, data){
        console.log("Saving Properties")

        return ndata
    })
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});

process.on('exit', function(){
    minecraftProcess.kill();
});