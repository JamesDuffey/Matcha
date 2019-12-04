const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

app.use('/users',postRoute);

app.use(express.static(path.join(__dirname, 'index.css')));

//ROUTES
app.get('/',(req,res) => {
    res
        .status(200)
        .sendFile(path.join(__dirname,'index.html'));
});


//Connect to DB
mongoose.connect(
   process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connect to DB!')
);
//How to start listening to the server
app.listen(3000);