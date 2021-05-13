const express = require('express')
const router = express.Router()
const MovieCtrl = require('../controllers/movie.controller')

router.get('/movie',MovieCtrl.getList)
router.get('/movie/id/:id',MovieCtrl.getMovieId)
router.get('/movie/title/:title',MovieCtrl.getMovieName)
router.post('/movie',MovieCtrl.saveMovie)

router.put('/movie',MovieCtrl.updateMovie)

router.delete('/movie',MovieCtrl.removeMovie)


module.exports = router
