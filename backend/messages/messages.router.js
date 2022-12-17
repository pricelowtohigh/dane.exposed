const router = require("express").Router();
const controller = require("./messages.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(controller.listMessages)
    .post(controller.createMessage)
    .all(methodNotAllowed);

module.exports = router;