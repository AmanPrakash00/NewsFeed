//instance create
const mongoose = require("mongoose");
const Comment = require("../models/commentModel");
const Like = require("../models/likeModel");
const nodemailer = require("nodemailer");
require("dotenv").config();
//route handler 
const postSchema = new mongoose.Schema({

    name:{
        type:String,
        requrired: true,
    },
    title:{
        type:String,
        requrired:true,
        maxLen:50,
    },
    body:{
        type:String,
        requrired:true,
        maxLen:500,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});

//post se pehle 
postSchema.post("save",async function (doc) {
    try{
        // console.log("Doc",doc);

        //step 1: create transpoter
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }

        })
        //step 2: send mail
        let info = await transporter.sendMail({
            from:"WishMate By Aman",
            to: "amanprakash848202@gmail.com",
            subject:"New Post on WishMate",
            html:'<h2>Hello ji </h2> <p>post uploaded<p>',
        })
        console.log(info);
    }catch(error){
        console.log("Getting error while sending the mail")
        console.error(error);
    }
})

//export
module.exports = mongoose.model("Post",postSchema);