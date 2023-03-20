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
    let startdata = req.body.startstate

    console.log(startdata)
    res.send("startdata")

    if(startdata = true){
        const { spawn } = require('child_process');
        const bat = spawn('cmd.exe', ['/c', 'C:\\Users\\Oppilas1\\Desktop\\VS kamat\\MineservuPOGOY\\backend\\start.bat']);
        bat.stdout.on('data', (data) => {
            console.log('data is : '+data.toString());
        });
      
        bat.stderr.on('data', (data) => {
            console.error('error is : '+data.toString());
        });
      
        bat.on('exit', (code) => {
            console.log(`Child exited with code ${code}`);
        });
    }else if(startdata = false){
        console.log("sulkee")
        return;
    }
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});