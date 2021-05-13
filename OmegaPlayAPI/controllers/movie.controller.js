const MovieCtrl = {}
const Movie = require('../models/Movie')
const ObjectId = require('mongodb').ObjectId; 

MovieCtrl.getList = async(req, res) => {
    console.log("GetRequest");
    const Movies = await Movie.find();
    console.log(Movies);
    res.json(Movies);
}

MovieCtrl.getMovieId = async(req,res) =>{
    const id = req.params.id;
    var _id = new ObjectId(id);
    const Movies = await Movie.find({"_id":_id});
    console.log(Movies);
    res.json(Movies);
}

MovieCtrl.getMovieName = async(req,res) =>{ 
    const title = req.params.title;
    const Movies = await Movie.find({"title":title});
    console.log(Movies);
    res.json(Movies);
}

MovieCtrl.saveMovie = async(req, res) => {
    console.log("Body:");
    console.log(req.body);
    const title = req.body.title;
    const src = req.body.src;
    const images = req.body.images;
    const releaseDate = req.body.releaseDate;
    const duration = req.body.duration;
    const genres = req.body.genres;
    const calification = req.body.calification;
    const country = req.body.country;
    const summary = req.body.summary;
    const directors = req.body.directors;
    const productionCompany = req.body.productionCompany;
    const cast = req.body.cast;
    const MovieObj = new Movie({title,src,images,releaseDate,duration,genres,calification,country,summary,directors,productionCompany,cast});
    await MovieObj.save();
    res.json({'Response':'OK'});
}

MovieCtrl.updateMovie = async(req, res) => {
    const title = req.body.title;
    const src = req.body.src;
    const images = req.body.images;
    const releaseDate = req.body.releaseDate;
    const duration = req.body.duration;
    const genres = req.body.genres;
    const calification = req.body.calification;
    const country = req.body.country;
    const summary = req.body.summary;
    const directors = req.body.directors;
    const productionCompany = req.body.productionCompany;
    const cast = req.body.cast;

    const newTitle = req.body.newTitle;
    const newSrc = req.body.newSrc;
    const newImages = req.body.newImages;
    const newReleaseDate = req.body.newReleaseDate;
    const newDuration = req.body.newDuration;
    const newGenres = req.body.newGenres;
    const newCalification = req.body.newCalification;
    const newCountry = req.body.newCountry;
    const newSummary = req.body.newSummary;
    const newDirectors = req.body.newDirectors;
    const newProductionCompany = req.body.newProductionCompany;
    const newCast = req.body.newCast;
    await Movie.updateOne(
        {
            "title":title,
            "src":src,
            "images":images,
            "releaseDate":releaseDate,
            "duration":duration,
            "genres":genres,
            "calification":calification,
            "country":country,
            "cummary":summary,
            "directors":directors,
            "productionCompany":productionCompany,
            "cast":cast 
        },
        {
            "title":newTitle,
            "src":newSrc,
            "images":newImages,
            "releaseDate":newReleaseDate,
            "duration":newDuration,
            "genres":newGenres,
            "calification":newCalification,
            "country":newCountry,
            "cummary":newSummary,
            "directors":newDirectors,
            "productionCompany":newProductionCompany,
            "cast":newCast 
        }
    );
    res.json({'Response':'OK'});
}


MovieCtrl.removeMovie = async(req, res) => {
    const title = req.body.title;
    const src = req.body.src;
    const images = req.body.images;
    const releaseDate = req.body.releaseDate;
    const duration = req.body.duration;
    const genres = req.body.genres;
    const calification = req.body.calification;
    const country = req.body.country;
    const summary = req.body.summary;
    const directors = req.body.directors;
    const productionCompany = req.body.productionCompany;
    const cast = req.body.cast;
    await Movie.remove(
        {
            "title":title,
            "src":src,
            "images":images,
            "releaseDate":releaseDate,
            "duration":duration,
            "genres":genres,
            "calification":calification,
            "country":country,
            "cummary":summary,
            "directors":directors,
            "productionCompany":productionCompany,
            "cast":cast 
        }
    );
    res.json({'Response':'OK'});
}

module.exports = MovieCtrl