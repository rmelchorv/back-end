"use strict";

let connectorDB = require("mongoose");
let server = require("./api-server");
let port = 3700;

connectorDB.Promise = global.Promise;
connectorDB.connect("mongodb://localhost:27017/bookstore")
           .then(() => {
               console.log("Successfully connection!");

               server.listen(port,() => {
                   console.log("Local server already listening request!");
               });
           })
           .catch(err => console.log(err));
