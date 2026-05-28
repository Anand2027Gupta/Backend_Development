const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/authtestapp");

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age: Number
});

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: String,
//   password: String,
//   age: Number
// });


 module.exports=mongoose.model("user",userSchema);