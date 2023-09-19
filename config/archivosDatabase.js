const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('tp', 'root', '', {
 host: 'localhost',
 dialect: 'mysql'
});
module.exports = sequelize;