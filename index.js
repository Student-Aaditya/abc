const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

main().
    then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/sample");
}

const newprt=new mongoose.Schema({
    title:{
        type:String,
    },
    name:{
        type:String,
    },
    page:{
        type:Number,
    },
});
const Prat=new mongoose.model("Prat",newprt);

let ch=new Prat({
    title:"AIML",
    name:"Aaditya",
    page:50,
});
Prat.insertMany(ch);
