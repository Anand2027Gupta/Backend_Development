const express=require('express');

const app=express();

const path=require('path');

//These two below lines are parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));


app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index");
});

app.get("/profile/:username",function(req, res){
    res.send(`Welcome ,${req.params.username}`);
} )

app.get("/profile/:username/:age",function(req, res){
    res.send(`Hello my name is ${req.params.username} and my age is ${req.params.age}`);
} )


app.listen(3000,function(){
    console.log("server running on port 3000");
});