const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbName: process.env.MONGO_DBNAME,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Connected'));

const Schema = mongoose.Schema;

const movieDetailSchema = new Schema({
    title: String,
    year: {type: Number, min: 1900},
    releaseDate: Date
})

const MovieDetail = db.model('movieDetail', movieDetailSchema);

const movie = new MovieDetail();
movie.title = 'Taxi';
movie.year = 1999;
movie.releaseDate = new Date(1999, 10, 2);
movie.save()
    .then(() => console.log("saved"))
    .catch(error => console.log(error));
