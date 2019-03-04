const mongoose = require('mongoose');
const db = require('./lib/db');
const MovieDetail = require('./models/movie');

const movie = new MovieDetail();
movie.title = 'Taxi';
movie.year = 1999;
movie.releaseDate = new Date(1999, 10, 2);
movie.save()
    .then(() => console.log("saved"))
    .catch(error => console.log(error));

MovieDetail.find().then(items => console.log(items)).catch(error => console.log(error));
