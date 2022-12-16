require('dotenv').config();
const path = require("path");

const { DATABASE_URL = "postgresql://postgres@localhost/postgres" } = process.env;


module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "db", "migrations")
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds")
    }
  },

};
