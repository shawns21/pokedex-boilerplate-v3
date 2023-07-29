const { db, Sequelize } = require("./db");

const Pokemon = db.define("pokemon", {
    name: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.STRING,
    },
    trainerlist: {
        type: Sequelize.STRING,
    },
    date: {
        type: Sequelize.DATE,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'user@example.com',
    },
});

const Trainers = db.define("trainers", {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    team: {
        type: Sequelize.STRING,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'user@example.com',
    },
});

Pokemon.belongsTo(Trainers);
Trainers.hasMany(Pokemon);

module.exports = {
  db,
  Pokemon,
  Trainers,
};
