const UserCtrl = {}
const User = require('../models/User')

UserCtrl.login = async (req, res) => {
    const userName = req.headers.username;
    const password = req.headers.password;
    var currentUser = [];

    if (userName == undefined || password == undefined) {
        var currentUser = await User.find();
        res.json(currentUser);
    } else {
        var currentUser = await User.find({ userName: userName, password: password });
        if (currentUser.length <= 0) {
            res.json({ "response": "A user with that credentials was not found" });
        } else {
            res.json(currentUser);
        }
    }
}

UserCtrl.registerUser = async (req, res) => {
    console.log(req.body.userObject);
    var currentUser = await User.find({ userName: req.body.userObject.userName });
    console.log(currentUser);
    if (currentUser.length > 0) {
        res.json({ "response": "A user with that username already exists" });
    } else {
        //console.log(req.body)
        const userName = req.body.userObject.userName;
        const password = req.body.userObject.password;
        const email = req.body.userObject.email;
        const genre = req.body.userObject.genre;
        const birthDate = req.body.userObject.birthDate;
        const country = req.body.userObject.country;
        const city = req.body.userObject.city;
        const img = 1;
        const UserObj = new User({ userName, password, email, genre, birthDate, country, city, img });
        await UserObj.save();
        var currentUser = await User.find({ userName: userName });
        console.log("------");
        console.log(currentUser);
        res.json(currentUser);
    }
}

UserCtrl.updateUserAvatar = async (req, res) => {
    console.log(req.query.userName)
    const userName = req.query.userName;
    const avatar = req.query.avatar;
    await User.updateOne({ "userName": userName }, { "img": avatar });
    const updatedUser = await User.find({ userName: userName });

    if (updatedUser.length <= 0) {
        res.json({ "response": "A user with that username was not found" });
    }

    res.json(updatedUser);
}

UserCtrl.deleteUser = async (req, res) => {
    const userName = req.query.userName;

    if (!userName) {
        res.json({ "response": "You must pass a username" });
    } else {
        await User.deleteOne({ "userName": userName });
    }

    res.json({ "response": "ok" });
}

UserCtrl.addMovieToHistory = async (req, res) => {
    const userName = req.query.userName;
    const movie = req.query.movie;
    await User.updateOne({ "userName": userName }, { $addToSet: { "movies": movie } });
    const updatedUser = await User.find({ userName: userName });

    if (updatedUser.length <= 0) {
        res.json({ "response": "A user with that username was not found" });
    }

    res.json(updatedUser);
}

module.exports = UserCtrl