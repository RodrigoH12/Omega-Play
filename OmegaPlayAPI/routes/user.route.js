const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/user.controller')

router.get('/user', UserCtrl.getUserData)
router.post('/user', UserCtrl.registerUser)
router.put('/user', UserCtrl.updateUserAvatar)
router.delete('/user/:userName', UserCtrl.deleteUser)

module.exports = router
