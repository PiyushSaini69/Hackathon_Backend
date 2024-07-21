import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/Canteen');

const con = mongoose.connection;
con.on('open', () => {
    console.log("connection success");
})

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmpassword: String
})

const Form = mongoose.model('Form',formSchema)
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        unique:true
    },
    password: String,
    confirmpass:String,
})

const User = mongoose.model('User',userSchema)

export {Form,User}


