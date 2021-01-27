const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/users", adminAuth,(req,res) => {
    
    User.findAll().then(users => {
        res.render("admin/users/index", {users: users})
    })
    
})

router.get("/admin/users/create",  adminAuth,(req,res) => {
    res.render("admin/users/create");
})
router.get("/admin/users/edit/:id",adminAuth,(req,res) => {
    var id = req.params.id;
    if(id != undefined) {
        if(isNaN(id)) {
            res.redirect("/admin/users");
        }
            User.findByPk(id).then(user => {
                if(user != undefined) {
                    res.render("admin/users/edit", {user: user});
                }
                else {
                    res.redirect("/admin/users");
                }
            })
        
    }
})
router.post("/users/update",(req,res) => {
    var id = req.body.id;
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, salt);

    User.update({name: name, username: username, email: email, password: hash},
        {where: {id: id}}
    ).then(() => {
        res.redirect("/admin/users")
    })
})

router.post("/users/create",adminAuth, (req,res) => {
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
        where: {email: email}
    }).then(user => {
        if(user == undefined) {
            
            var hash = bcrypt.hashSync(password, salt);
            if(name != undefined && username != undefined && email != undefined && password!= undefined) {
                User.create({
                name: name,
                username: username,
                email: email,
                password: hash
                }).then(() => {
                    res.redirect("/admin/users");
                }).catch(err => {
                    console.log("Error! -> " + err);
                })
            }
            else {
                res.redirect("/admin/users/create")
            }
        }
        else {
            res.redirect("/admin/users/create")
        }
    })
    
    
})
router.post("/users/delete", (req,res) => {
    var id = req.body.id;
    User.destroy({
    where: {id: id}
    }).then(() => {
        res.redirect("/admin/users");
    })
})

router.get("/login", (req,res) => {
    res.render("admin/users/login");
})

router.post("/authenticate", (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({where: {username: username}}).then(user => {
        if(user != undefined) {
            var correct = bcrypt.compareSync(password, user.password);
            if(correct) {
                req.session.user = {
                    id: user.id,
                    username: user.username
                }
                
                
                    res.redirect("/admin/articles");
                
            }
            else{
                res.redirect("/login");
            }
        }
        else{ 
            res.redirect("/login");
        }
    })
});

router.get("/logout", (req,res) => {
    req.session.user = undefined;
    res.redirect("/");
})

module.exports = router;