const Sequelize = require("sequelize");
const conn = new Sequelize('ninjapress', 'root', 'suasenha', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});
   
module.exports = conn;
