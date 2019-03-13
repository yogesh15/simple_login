var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose")

mongoose.connect("mongodb://localhost:27017/simple_login",{useNewUrlParser: true});

//Defining Schema for aur db
var userSchema = new mongoose.Schema({
    username: String,
    password: String
});
//making model
var User = mongoose.model("User",userSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");


app.get("/",function(req,res){
        res.render("home");
});

app.get("/registerHome",function(req,res){
    res.render("register");
});

//app.get("/register",function(req,res){
//    res.render("registered",{registered: registered});
//});
app.post("/register",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var UserData = new User({
        username: username,
        password: password
    });
    UserData.save(function(err,user){
        if(err){
            console.log("Something went Wrong !!!");
            console.log(err);
        }
        else {
            console.log("User added");
            console.log(user);
        }
    });
    res.render("home");
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
