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
    },
    read: (req,res) => {
        Book.find((err,foundedBooks) => {
            if(err)
                return res.status(500).send({
                    message: "Error on READ books!"
                });
            return res.status(200).send({
                op: "Read",
                book: foundedBooks
            });
        });
    },
    readOne: (req,res) => {
        let id=req.params.id;

        Book.findById(id,(err,foundedBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on READ a book!"
                });
            return res.status(200).send({
                op: "ReadOne",
                book: foundedBook
            });
        });
    },
    update: (req,res) => {
        let id=req.params.id;
        let attr=req.body;

        Book.findByIdAndUpdate(id,attr,(err,updatedBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on UPDATE a book!"
                });
            return res.status(200).send({
                op: "Update",
                book: updatedBook
            });
        });
    },
    delete: (req,res) => {
        let id=req.params.id;

        Book.findByIdAndDelete(id,(err,deletedBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on DELETE a book!"
                });
            return res.status(200).send({
                op: "Delete",
                book: deletedBook
            });
        });
    }
};

module.exports=controller;
