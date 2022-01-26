"use strict";

let express = require("express");
let parser = require("body-parser");

let server = express();

//Archivos/Rutas

//Middleware
server.use(parser.urlencoded({ extended: false}));
server.use(parser.json());

//Rutas

module.exports = server;
