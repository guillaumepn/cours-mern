const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;

const movieDetailSchema = new Schema({
    title: String,
    year: {type: Number, min: 1900},
    releaseDate: Date
});

module.exports = db.model('movieDetail', movieDetailSchema);

