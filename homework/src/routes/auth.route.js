const express = require("express");
const router = express.Router();
const AuthController = require("../app/controllers/auth.controller");

router.get("/", AuthController.oauth);
router.get("/oauth-callback", AuthController.callback);

module.exports = router;
