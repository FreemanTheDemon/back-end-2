const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ctrl = require('./controller.js');

app.get('/api/movies', ctrl.getMovies);

app.post('/api/movies', ctrl.createMovie);

app.listen(4004, () => console.log('Take us to warp 4004 Mr. Sulu!'));