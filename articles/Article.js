const Sequelize = require("sequelize");
const conn = require("../database/database");
const Category = require("../categories/Category");
const Article = conn.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: true
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }


})
/* --- RELACIONAMENTOS --- */
Category.hasMany(Article); // 1 - PARA - M (Uma categoria tem muitos artigos)
Article.belongsTo(Category); // 1 - PARA - 1 BelongsTo = pertence a 
/* ----------------------- */
Article.sync({force: false});
module.exports = Article;