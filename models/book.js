"use strict";

let mongoose=require("mongoose");

let Schema=mongoose.Schema;
let bookSchema=new Schema({
    author: String,
    category: String,
    country: String,
    name: String,
    price: Number,
    year: Number
});

module.exports=mongoose.model('Book',bookSchema);
