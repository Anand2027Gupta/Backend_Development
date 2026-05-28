const fs = require('fs');


//write file
//append file
//copy file
//rename 
//unlink

// fs.appendFile("hello.txt","Hey Hello kaise ho ",function(err){
//     if(err) console.log(err);
//     else{
//         console.log("file append successfully");
        
//     }


// })


// fs.rename("hello.txt","hey.txt",function(err){
//     if(err) console.log(err);
//    else{        console.log("file renamed  successfully");
        
//     }
// })


// JavaScript Revision
// For Each 
// var arr=[1,2,3,4,5,6];
// arr.forEach(function(val){
//     console.log(val+" Hello");
// })

// fs.unlink("hey.txt",function(err){
//     if(err) console.log(err);
//     else{
//         console.log("Removed");
//     }
// })


const http=require('http');

const server=http.createServer(function(req,res){
    res.end("Hello World");

})
server.listen(3000);