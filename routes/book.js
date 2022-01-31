"use strict";

let express=require("express");
let bookController=require("../controllers/book");

let router=express.Router();

router.get("/home", bookController.home);
router.get("/test", bookController.test);
router.post("/books", bookController.create);

module.exports = router;
