const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userModel=require('./usermodel');


console.log("DEBUG userModel =", userModel);
console.log("DEBUG typeof userModel =", typeof userModel);

mongoose.connect('mongodb://localhost:27017/mongopractice')
.then(() => console.log("MongoDB connected"));

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/create',async (req,res)=>{
    const createduser= await userModel.create({
        name:"Anani",
        email:"anandi2004@gmail.com",
        username:"Anandi Gupta"
    })
//console.log(userModel);
    res.send(createduser);
})


app.get('/update',async (req,res)=>{
     let updateduser=await userModel.findOneAndUpdate({username:"Anand Gupta"},{name:"Anand Gupta Janakpuri"},{new:true})
    res.send(updateduser);
})

app.get('/read',async (req,res)=>{
     let users=await userModel.find({username:"Anandi Gupta"});
    res.send(users);
})



app.get('/delete',async (req,res)=>{
     let deleteduser=await userModel.findOneAndDelete({username:"Anand Gupta"});
    res.send(deleteduser);
})


app.listen(3000);