var express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3000;

// var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// app.use(express.static("public"));

