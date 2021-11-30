const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ctrl = require('./controller.js');

app.get('/api/movies', ctrl.getMovies);

app.post('/api/movies', ctrl.createMovie);

app.put('/api/movies/:id', ctrl.updateMovie);

app.delete('/api/movies/:id', ctrl.deleteMovie);

/*
Create post
Read   get
Update put
Delete delete
*/

app.listen(4004, () => console.log('Take us to warp 4004 Mr. Sulu!'));