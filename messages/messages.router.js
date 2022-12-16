const router = require("express").Router();
const controller = require("./messages.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.listMessages).all(methodNotAllowed);

module.exports = router;