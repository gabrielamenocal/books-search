var express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
var cheerio = require("cheerio");
var axios = require("axios");
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var PORT = process.env.PORT || 4000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

var db = require("./models");


app.post("/books", function(req, res) {   
  console.log(req.body)
  db.book.create(req.body)
    .then(function(dbbook) {
      res.json(dbbook);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/books", function(req, res) {   
  db.book.find(req.body)
    .then(function(dbbook) {
      res.json(dbbook);
    })
    .catch(function(err) {
      res.json(err);
    });
});








app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

