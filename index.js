const express = require('express');
const dbjson = require('./db.json');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/product', (req, res) => {
    res.json(dbjson);
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = dbjson.find(p => p.id == id);
    res.json(product);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});