import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/Canteen');

const con = mongoose.connection;
con.on('open', () => {
    console.log("connection success");
})
const foodDetailsSchema = new mongoose.Schema({
    "dishname": "String",

    "dishprice": "String",
    "dishimage": "String",

})

const FoodDetails = mongoose.model('FoodDetails',foodDetailsSchema)
const signinSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        unique:true
    },
    password: String,
    confirmpassword:String,
})

const Signin = mongoose.model('Signin',signinSchema)

export {Signin,FoodDetails}


