const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/user.controller')

router.get('/user', UserCtrl.login)
router.post('/user', UserCtrl.registerUser)
router.put('/user', UserCtrl.updateUserAvatar)
router.delete('/user', UserCtrl.deleteUser)
router.put('/user/history', UserCtrl.addMovieToHistory)

module.exports = router
