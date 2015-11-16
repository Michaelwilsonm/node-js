var http = require('http')
var express = require('express')
var app = express()
var ejs = require('ejs')

require("./app/routes.js")(app)

app.listen(3000)

console.log("server is running on port " + 3000)