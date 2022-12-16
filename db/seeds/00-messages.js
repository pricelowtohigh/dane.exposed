exports.seed = function (knex) {
    return knex ("messages")
        .then(function () {
            return knex ("messages").insert([
                { message_id: 1, author: "god", message: "hello woarld." }
            ])
        })
}