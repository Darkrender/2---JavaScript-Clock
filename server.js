const express = require('express');
const opn = require('opn');

const app = express();

app.use(express.static('app'));

app.get('/', (req, res) => res.sendFile(__dirname + '/app/main.html'));

app.listen(3000);

opn('http://localhost:3000');