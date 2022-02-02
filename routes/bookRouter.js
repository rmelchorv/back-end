"use strict";

let express=require("express");
let bookController=require("../controllers/bookController");

let router=express.Router();

router.post("/books", bookController.create);
router.get("/books/:id?", bookController.read);
router.put("/books/:id", bookController.update);
router.delete("/books/:id", bookController.delete);

module.exports = router;
