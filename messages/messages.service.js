const knex = require("../db/connection");

function listMessages () {
    return knex("messages")
        .select("*")
        .orderBy("created_at")
}

module.exports = {listMessages}