const mongoose = require('mongoose');
const {Schema} = mongoose;
const movieSchema = new Schema({
    title: {type: String, require:true},
    src: {type: String, require: true},
    releaseDate: {type: Date, require: true},
    duration: {type: String, require: true},
    genres: [{type: String, require: true}],
<<<<<<< HEAD
    calification: {type: Numeric, require: true},
=======
    calification: {type: Number, require: true},
>>>>>>> Implemented Movies Controller
    country: {type: String, require: true},
    summary: {type: String, require: true},
    directors: [{type: String, require: true}],
    productionCompany: {type: String, require: true},
    cast: [{type: String, require: true}]
});

module.exports = mongoose.model('movies', movieSchema);