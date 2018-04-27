const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

var app = express();
var port = Number(process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(dbConfig.url, (err)=>{
    if(err){
        console.log("Error occured while connecting to MongoDB: "+err);
    } else {
        console.log("Successfully connected to MongoDB");
    }
});

app.get('/', (req, res)=>{
    res.send("This is home page");
});

require('./app/routes/todo.routes.js')(app);
app.listen(port, (err)=>{
    if(err){
        console.log("Error occured while running app");
    } else {
        console.log("App running on port: "+port);
    }
});
