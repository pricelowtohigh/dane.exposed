const messagesService = require("./messages.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listMessages (req, res) {
    const responseData = await messagesService.listMessages();
    res.status(200).json({ data: responseData})
}

module.exports = {listMessages: [asyncErrorBoundary(listMessages)]}