//instance create
const mongoose = require("mongoose");
//route handler 
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
        maxLen:20,
    },
    code:{
        type:Number,
        required:true,
        trim:true
    }
});

//export

module.exports = mongoose.model("Like",likeSchema);