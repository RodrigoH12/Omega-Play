const UserCtrl = {}
const User = require('../models/User')

UserCtrl.login = async (req, res) =>{
    const userName = req.query.userName;
    const password = req.query.password;
    var currentUser = [];

    if (userName == undefined || password == undefined) {
        var currentUser = await User.find();
    } else {
        var currentUser = await User.find({ userName: userName, password: password });
    }
    
    if(currentUser.length <= 0) {
        res.json({"response": "A user with that credentials was not found"});
    }

    res.json(currentUser);
}

UserCtrl.registerUser = async (req, res) =>{
    console.log ( req.body )
    const userName = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;
    const genre = req.body.genre;
    const birthDate = req.body.birthDate;
    const country = req.body.country;
    const city = req.body.country;
    const UserObj = new User ({ userName, password, email, genre, birthDate, country, city });
    await UserObj.save();
    res.json({"response": "ok"});
}

UserCtrl.updateUserAvatar = async (req, res) => {
    const userName = req.query.userName;
    const avatar = req.query.avatar;
    await User.updateOne({"userName": userName }, {"img": avatar});
    const updatedUser = await User.find({ userName: userName });

    if(updatedUser.length <= 0) {
        res.json({"response": "A user with that username was not found"});
    }

    res.json(updatedUser);
}

UserCtrl.deleteUser = async (req, res) => {
    const userName = req.query.userName;

    if (!userName) {
        res.json({"response": "You must pass a username"});
    } else {
        await User.deleteOne({"userName": userName});
    }

    res.json({"response": "ok"});
}

UserCtrl.addMovieToHistory = async (req, res) => {
    const userName = req.query.userName;
    const movie = req.query.movie;
    await User.updateOne({"userName": userName }, { $addToSet: { "movies": movie }});
    const updatedUser = await User.find({ userName: userName });

    if(updatedUser.length <= 0) {
        res.json({"response": "A user with that username was not found"});
    }

    res.json(updatedUser);
}

module.exports = UserCtrl