var express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
var cheerio = require("cheerio");
var axios = require("axios");
var app = express();

var PORT = process.env.PORT || 3000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

var db = require("./models");


app.post("/submit", function(req, res) {  
  
  db.book.create(req.body)
    .then(function(dbbook) {
      res.json(dbbook);
    })
    .catch(function(err) {
      res.json(err);
    });
});





// app.get("/comments", function(req, res){
//   comments.find()
//   .then(function(comments) {
//     res.json(comments);
//   })
//   .catch(function(err) {
//     res.json(err);
//   });
// })



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

