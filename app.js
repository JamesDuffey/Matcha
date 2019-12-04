const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json());

//Import Routes
app.set('view engine', 'ejs');

 app.use('/layout', express.static('layout'));
 app.use('/images', express.static('images'));
// app.use('/pages', express.static('pages'));

//ROUTES
app.get('/',(req,res) => {
    res.render('login')
});

app.get('/register',(req,res) => {
    res.render('register', {qs:req.query});
});

app.post('/register', urlencodedParser, function(req,res) {
    console.log(req.body);
    res.render('register', {qs: req.query});
});

//Connect to DB
mongoose.connect(
   process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connect to DB!')
);
//How to start listening to the server
app.listen(8080);