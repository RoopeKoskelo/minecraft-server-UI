const express = require('express');
const cors = require('cors');
const app = express();
// viesti reactiin että backend toimii
app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json({ message: "Backend päällä" });
});

//start server nappi

app.post('/start', async (req, res) => {
    let startdata = await req.body.startstate
    const { spawn, ChildProcess, subprocess } = require('child_process');
    const minecraftProcess = spawn('java', [
        '-jar',
        '-Xmx1024m',
        '-Xms1024m',
        'craftbukkit-1060-b1.7.3.jar'
    ], { detached: true });

    console.log(startdata)
    res.send("startdata")

    if(startdata === true){
        function log(data){
            process.stdout.write(data.toString());
        }
        
        minecraftProcess.stdout.on('data', log);
        minecraftProcess.stderr.on('data', log);

    }
    else if(startdata === false){
        process.kill(-minecraftProcess.pid)
        console.log("vittusaatana");
        return;
    }
});

// server.properties handlaaminen (dear god)

app.post('/settings', async (req, res) => {

    const propertiesparser = require("properties-parser")
    
    function parseProperties(){
        
        propertiesparser.read('../backend/server.properties', function(error, data){
            console.log(data);
        })
    }
    

    let check = await req.body.check

    if(check === true){
        parseProperties();
    }

})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});

process.on('exit', function(){
    minecraftProcess.kill();
});