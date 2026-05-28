 const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
app.use(cookieParser());

// app.get('/',(req,res)=>{
// bcrypt.compare("Anand Gupta", "$2b$10$wLo0RfSgaBzIiEDQ1k3FT.RcToxh9cfOxepP0xMae/1.ViQlL6RgW", function(err, result) {
//     console.log(result);
// });

// })

app.get('/',(req,res) =>{
    let token = jwt.sign({email: "Anand19122004@gmail.com"}, "secret");
    res.cookie("token",token);
    console.log(token);
    res.send("Done")
})


// app.get('/read',(req,res)=>{
// //   console.log(req.cookies);
//   res.send("Read Page");
// })

app.get('/read',(req, res)=>{

    let data=jwt.verify(req.cookies.token, "secret");
    console.log(data);
})


app.listen(3000);
