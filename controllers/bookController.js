"use strict";

let Book=require("../models/bookModel");

let controller={
    create: (req,res) => {
        let book=new Book();
        let params=req.body;

        book.author=params.author;
        book.category=params.category;
        book.country=params.country;
        book.name=params.name;
        book.price=params.price;
        book.year=params.year;
        
        book.save((err,createdBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on CREATE book!"
                });
            if(!createdBook)
                return res.status(400).send({
                    message: "Can't CREATE book!"
                });
            return res.status(201).send({
                message: "Book created",
                book: createdBook
            })    
        });
    },
    read: (req,res) => {
        let id=req.params.id;

        if(id===null)
            Book.find((err,readedBooks) => {
                if(err)
                    return res.status(500).send({
                        message: "Error on READ books!"
                    });
                if(!readedBooks)
                    return res.status(400).send({
                        message: "Can't READ books!"
                    });
                return res.status(200).send({
                    message: "Books readed",
                    book: readedBooks
                });
            });
        else
            Book.findById(id,(err,readedBook) => {
                if(err)
                    return res.status(500).send({
                        message: "Error on READ book!"
                    });
                if(!readedBook)
                    return res.status(400).send({
                        message: "Can't READ book!"
                    });
                return res.status(200).send({
                    message: "Book readed",
                    book: readedBook
                });
            });
    },
    update: (req,res) => {
        let id=req.params.id;
        let attr=req.body;

        Book.findByIdAndUpdate(id,attr,(err,updatedBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on UPDATE book!"
                });
            if(!updatedBook)
                return res.status(400).send({
                    message: "Can't UPDATE book!"
                });
            return res.status(200).send({
                message: "Book updated",
                book: updatedBook
            });
        });
    },
    delete: (req,res) => {
        let id=req.params.id;

        Book.findByIdAndDelete(id,(err,deletedBook) => {
            if(err)
                return res.status(500).send({
                    message: "Error on DELETE book!"
                });
            if(!deletedBook)
                return res.status(400).send({
                    message: "Can't DELETE book!"
                });
            return res.status(200).send({
                message: "Book deleted",
                book: deletedBook
            });
        });
    }
};

module.exports=controller;
