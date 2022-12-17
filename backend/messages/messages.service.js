const knex = require("../db/connection");

function listMessages () {
    return knex("messages")
        .select("*")
        .orderBy("created_at")
}

function createMessage (newMessage) {
    return knex("messages")
        .insert(newMessage)
        .returning("*")
        .then((createdRecord) => createdRecord[0])
}

function readMessages(message_id) {
    return knex("messages")
        .select("*")
        .where({ message_id: message_id })
        .first();
}

module.exports = {
    listMessages,
    createMessage,
    readMessages
}