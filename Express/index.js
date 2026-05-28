const express=require("express");
const app=express();


let port=8080;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.get("/:username",(req,res)=>{
    let {username}=req.params;
    let htmlStr=`<h1>Welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
});


app.get("/search",(req,res)=>{
    let {q}=req.query;

    res.send(`<h1>Search Results for q is:${q}.</h1>`);
});



// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// })
// app.use((req,res)=>{
//     res.send("This path does not exist");
// })



// app.use((req,res)=>{
//     console.log("Request Recieved");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });
  

//     let code="<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });