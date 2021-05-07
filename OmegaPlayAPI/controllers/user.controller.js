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
    var currentUser = await User.find({ userName: userName });
    console.log(currentUser);
    if (currentUser.length > 0) {
        res.json({ "response": "A user with that username already exists" });
    } else {
        //console.log(req.body)
        const userName = req.body.userName;
        const password = req.body.password;
        const email = req.body.email;
        const genre = req.body.genre;
        const birthDate = req.body.birthDate;
        const country = req.body.country;
        const city = req.body.city;
        const UserObj = new User({ userName, password, email, genre, birthDate, country, city });
        await UserObj.save();
        console.log(UserObj);
        res.json({ "response": "ok" });
    }
}

UserCtrl.updateUserAvatar = async (req, res) => {
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