const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gymer123', 'root', 'Pltd12345@@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
}
);

module.exports = sequelize;

