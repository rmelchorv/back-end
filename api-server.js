"use strict";

let express=require("express");
let parser=require("body-parser");

let server=express();

//Archivos/Rutas

//Middleware
server.use(parser.urlencoded({ extended: false}));
server.use(parser.json());

//Rutas
server.get('/', (req,res) => {
    res.status(200).send({
        message: "Home"
    });
})
server.get('/hello-world', (req,res) => {
    res.status(200).send("Hello world!");
})
server.get('/test', (req,res) => {
    res.status(200).send("<h1>GET Test page!</h1>");
})
server.post('/test', (req,res) => {
    console.log("As URL param:",req.query.year);
    console.log("As body param:",req.body.year);

    res.status(200).send("<h1>POST Test page without PARAMS!</h1>");
})
server.post('/test/:year', (req,res) => {
    console.log("As route:",req.params.year);

    res.status(200).send("<h1>POST Test page with PARAMS!</h1>");
})

module.exports=server;
