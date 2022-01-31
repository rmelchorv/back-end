"use strict";

let express=require("express");
let parser=require("body-parser");

let server=express();

//Archivos/Rutas
let bookRouter=require("./routes/book");

//Middleware
server.use(parser.urlencoded({ extended: false}));
server.use(parser.json());

//Rutas
server.use("/api",bookRouter);

module.exports=server;
