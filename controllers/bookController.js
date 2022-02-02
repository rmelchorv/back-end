"use strict";

let Book=require("../models/bookModel");

let controller={
    home: (req,res) => {
        return res.status(200).send({
            message: "Welcome 2HOME!"
        });
    },
    test: (req,res) => {
        return res.status(200).send({
            message: "A TEST method!"
        });
    },
    create: (req,res) => {
        let book=new Book();
        let params=req.body;

        book.author=params.author;
        book.category=params.category;
        book.country=params.country;
        book.name=params.name;
        book.price=params.price;
        book.year=params.year;
        
        book.save((err,storedBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on CREATE a new Book!"
                });
            if(!storedBook)
                return res.status(400).send({
                    message: "Can't CREATE a new Book!"
                });
            return res.status(201).send({
                book: storedBook
            })    
        });
    }
};

module.exports=controller;
