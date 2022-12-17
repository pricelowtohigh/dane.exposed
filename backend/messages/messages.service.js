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

module.exports = {
    listMessages,
    createMessage
}