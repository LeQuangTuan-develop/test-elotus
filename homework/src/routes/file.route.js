const express = require("express");
const router = express.Router();
const fileController = require("../app/controllers/file.controller");
const uploadFile = require("../app/middlewares/upload");
const author = require("../app/middlewares/author");

router.post("/uploads", author, uploadFile, fileController.upload);

module.exports = router;
