const router = require("express").Router();
const controller = require("./messages.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(controller.listMessages)
    .post(controller.createMessage)
    .all(methodNotAllowed);

router
    .route("/:message_id")
    .get(controller.readMessages)
    .all(methodNotAllowed);

module.exports = router;