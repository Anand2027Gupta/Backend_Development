const express=require('express');
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');

app.get('/', (req,res) => {
    res.send('hello')
})


app.get('/create', async (req,res) => {
    let createdUser=await userModel.create({
        username:"harray",
        email:"harray@gmail.com",
        age:22
    })
    res.send(createdUser)
})

app.get('/post/create', async (req,res) => {
   let post= await postModel.create({
        postdata:"hello this is my first post",
        user:"69825776d8151c52d5476811"
    })

let user= await userModel.findOne({_id: "69825776d8151c52d5476811"});
user.posts.push(post._id);
await user.save();

    res.send({post,user});
})

app.listen(3000);