const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://shawns21@localhost:5432/pokedex",
  {
    logging: false,
  }
);

module.exports = { db, Sequelize };
