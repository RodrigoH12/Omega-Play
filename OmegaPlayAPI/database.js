const mongoose = require('mongoose')
//const URI = ('mongodb://localhost/user')
const URI = "mongodb+srv://useradmin:pass123@omegaplaycluster.ld60f.mongodb.net/webStore?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then (db=>console.log('Base de Datos: conectada'))
.catch(err => console.log(err))

module.exports = mongoose