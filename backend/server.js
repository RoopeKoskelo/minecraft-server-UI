const express = require('express');
const cors = require('cors');

const app = express();

// viesti reactiin että backend toimii
app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json({ message: "Toimii LFGGGGGGGGGGGGGGG" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

//start server nappi
app.use(cors());
app.use(express.json());
app.get('/start', (req, res) => {
    res.json({ state: 'false' });
});