const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const conn = require('./database/database');
const categoriesController = require("./categories/categoriesController");
const articleController = require("./articles/articlesController");
const Article = require("./articles/Article");
const Category = require("./categories/Category");
const UsersController = require("./users/UsersController");
const User = require("./users/User");
// Sessions
app.use(session({
    secret: "dolpjsnin", cookie: {maxAge: 30000} // milisegundos
}))
// sequelize
//redis -> serve para dar "storage" em banco de dados
// Carregar view engine
app.set('view engine', 'ejs');
// Arquivos estaticos
app.use(express.static('public'));
// Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
conn
.authenticate()
.then(() => {
    console.log("Database connected!");
}).catch((error) => {
    console.log("database error! => " + error)
})

/* ------------lINKAR controllers--------------- */
app.use("/"/*Essa "/" É um prefixo ! */, categoriesController);
app.use("/", articleController);
app.use("/", UsersController);
/* ------------------------------ */


/*app.get("/session", (req,res) => {
    req.session.blog = "Ninjapress"
    req.session.year = 2021
    req.session.user = {
        username: "guibarroso",
        email: "guibarrosodeoliveira@hotmail.com",
        id: 1
    }
    res.send("Sessão gerada!");
})

app.get("/read", (req,res) => {
    res.json({
        blog: req.session.blog,
        year: req.session.year,
        user: req.session.user 
    })
})

*/
app.get("/", (req,res) => {
    Article.findAll({
        include: [{model: Category}],
        order: [['id','DESC'],
        ],limit: 4}, 
    ).then(articles => {
        res.render("index", {articles:articles});
        /*Category.findAll().then(categories => {
            res.render("index", {articles:articles,categories:categories})
         })*/
        
    })
});
app.get("/:slug", (req,res) => {
    var slug = req.params.slug;
    Article.findOne({
        include: [{model: Category}],
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined) {
           /* Category.findAll().then(categories => {
                res.render("article", {article:article,categories:categories})
            })
            */
           res.render("article", {article:article});
        }
        else {
            res.redirect("/");
        }
    }).catch(error => {
        console.log("Error! -> " + error);
        res.redirect("/");
    })

})
app.get("/category/:slug",(req,res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if(category != undefined) {
            Category.findAll().then(categories => {
                res.render("filter", {articles: category.articles, categories: categories});
            })
        }
        else {
            res.redirect("/");
        }
        
    }).catch( err => {
        res.redirect("/")
    });
})

app.listen(8080, (error) => {
    if(error) {
        console.log("Error! => " + error );
    }
    else{
        console.log("Running!");
    }
    
})