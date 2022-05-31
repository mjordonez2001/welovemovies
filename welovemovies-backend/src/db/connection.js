const environment = "production";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
