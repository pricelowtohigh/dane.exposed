const messagesService = require("./messages.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listMessages (req, res) {
    const responseData = await messagesService.listMessages();
    res.status(200).json({ data: responseData})
}

async function createMessage (req,res) {
    const newMessage = req.body.data;
    const responseData = await messagesService.createMessage(newMessage);
    res.status(201).json({ data: responseData })
}

module.exports = {
    listMessages: [asyncErrorBoundary(listMessages)],
    createMessage: [asyncErrorBoundary(createMessage)]
}