const express = require("express");
const router = express.Router();
const main = require("../controllers/user.controller");

router.get("/", main.greetUser);
router.get("/home", main.home);
router.get("/about", main.about);
router.get("/contacts", main.contacts);
router.get("/settings", main.settings);

module.exports = router;
