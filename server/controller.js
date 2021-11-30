const movies = require('./db.json');

let globalId = 11;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
    },
    createMovie: (req, res) => {
        const { title, rating, imageURL } = req.body;
        let newMovie = {
            title,
            rating,
            imageURL,
            id: globalId
        }
        movies.push(newMovie);
        res.status(200).send(movies);
        globalId++;
    }
};