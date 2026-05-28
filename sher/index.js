const express = require('express');
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Middle Ware Create karna 
app.use(function(req, res, next){
    console.log("Middleware Run");
    next();
})

app.use(function(req, res, next){
    console.log("Middleware Run Again");
    next();
})

app.use(function(req, res, next){
    console.log("Middleware Run Again Again");
    next();
})



//Routes Create Karna 
app.get("/",function(req,res)   { 
    res.send("Champion mera Anuj")
})
app.get("/profile",function(req, res)   {
    res.send("hello this is my profile anand gupta");
})

app.listen(3000);
