const UserCtrl = {}
const User = require('../models/User')

UserCtrl.getUserData = async (req, res) =>{
    const userName = req.query.userName
    const currentUser = await User.find({ userName: userName })
    res.json(currentUser)
}

UserCtrl.registerUser = async (req, res) =>{
    console.log ( req.body )
    const userName = req.body.userName
    const password = req.body.password
    const email = req.body.email
    const genre = req.body.genre
    const birthDate = req.body.birthDate
    const country = req.body.country
    const city = req.body.country
    const UserObj = new User ({ userName, password, email, genre, birthDate, country, city })
    await UserObj.save()
    res.json({"response": "ok"})
}

UserCtrl.updateUserAvatar = async (req, res) => {
    const userName = req.query.userName
    const userAvatar = req.query.avatar
    await User.updateOne({"userName": userName }, {'img': userAvatar})
    const updatedUser = await User.find({ userName: userName })
    res.json(updatedUser)
}

UserCtrl.deleteUser = async (req, res) => {
    const userName = req.params.userName
    await User.remove({"userName": userName})
    res.json({"response": "ok"})
}

module.exports = UserCtrl