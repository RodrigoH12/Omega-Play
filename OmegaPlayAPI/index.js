const express = require('express');
const morgan =  require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set('Port', process.env.PORT || 4004);

app.use(morgan('dev'));
app.use('/api/',require('./routes/movie.route'))

app.listen(app.get('Port'), ()=>{
    console.log(`Express server on port ${app.get('Port')}`);
});