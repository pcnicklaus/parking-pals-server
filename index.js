const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const Need = require('./models/Need');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/parking-pals')

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.get('/needs', (req, res, next) => {
  Need.find()
    .then(needs => res.send(needs))
    .catch(next);
})

app.post('/need', (req, res, next) => {
  Need.create(req.body.e)
    .then( (need) => {
      Need.find()
        .then(needs => res.send(needs))
    })
})


const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('parkingpal server listening on ', port);
