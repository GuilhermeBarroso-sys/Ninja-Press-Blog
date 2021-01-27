const Sequelize = require("sequelize");
const conn = require("../database/database");
const adminAuth = require("../middlewares/adminAuth");

const User = conn.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
User.sync({force:false});


module.exports = User;