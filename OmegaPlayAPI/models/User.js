const mongoose = require('mongoose');
const {Schema} = mongoose;
const movies = mongoose.model("movies");
const userSchema = new Schema({
    userName: {type: String, require:true},
    password: {type: String, require: true},
    img: {type: String, require: true},
    email: {type: String, require: true},
    genre: {type: String, require: true},
    birthDate: {type: Date, require: true},
    country: {type: String, require: true},
    city: {type: String, require: true},
    movies: [{type : Schema.ObjectId, ref:"movies", require:false}] 
});

module.exports = mongoose.model('users', userSchema);