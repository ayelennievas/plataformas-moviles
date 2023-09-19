const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/archivosDatabase');
//definimos la clase con su respectivo nombre 
class User extends Model {}
//Difinimos los atributos de la clase con sus datos
User.init({
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 name: {
 type: DataTypes.STRING,
 allowNull: false
 },
 email: {
 type: DataTypes.STRING,
 allowNull: false,
 unique: true
 }
}, {
 sequelize,
 modelName: 'user'
});
module.exports = User;