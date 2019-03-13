var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose")

var registered = [] 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.get("/",function(req,res){
        res.render("home");
});

// Taking to Register page when register button is clicked
app.get("/registerHome",function(req,res){
    res.render("register");
});

app.get("/register",function(req,res){
    res.render("registered",{registered: registered});
});
app.post("/register",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var newRegister = {username: username, password: password} ;
    registered.push(newRegister);
    res.redirect("/register");

});
app.get("/login",function(req,res){
   // res.render("registered",{registered: registered});
   res.render("registered");
});
app.post("/login",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var checkLogin = {username: username, password: password} ;
    res.redirect("/login");

});

app.listen(3000,function(){
    console.log("The app is listening in port 3000");
}) ;   
