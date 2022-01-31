"use strict";

let dbConn=require("mongoose");
let apiServer=require("./api-server");

let port=3700;

dbConn.Promise = global.Promise;
dbConn.connect("mongodb://localhost:27017/bookstore")
      .then(() => {
        console.log("Successful connection 2DB!");

        apiServer.listen(port,() => {
            console.log("The local server is ready!");
        });
      })
      .catch(err => console.log(err));
