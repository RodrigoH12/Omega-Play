const express = require('express');
const morgan =  require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
require("./database")

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

app.set('Port', process.env.PORT || 4004);

app.use(morgan('dev'));
app.use('/api/',require('./routes/movie.route'))
app.use('/api/', require('./routes/user.route'))

app.listen(app.get('Port'), ()=>{
    console.log(`Express server on port ${app.get('Port')}`);
});