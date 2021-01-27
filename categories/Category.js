const Sequelize = require("sequelize");
const conn = require("../database/database");

const Category = conn.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
    //slug é endereço da categoria
    //se a categoria tem o titulo react.js o slug seria
    // react-js
    
})
Category.sync({force:false});
module.exports = Category;