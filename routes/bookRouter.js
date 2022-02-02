"use strict";

let express=require("express");
let bookController=require("../controllers/bookController");

let router=express.Router();

router.get("/home", bookController.home);
router.get("/test", bookController.test);
router.post("/books", bookController.create);
router.get("/books", bookController.read);
router.get("/books/:id", bookController.readOne);
router.put("/books/:id", bookController.update);
router.delete("/books/:id", bookController.delete);

module.exports = router;
