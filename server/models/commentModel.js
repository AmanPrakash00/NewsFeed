//instance create
const mongoose = require("mongoose");
//route handler 
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
        maxLen:20,
    },
    body:{
        type:String,
        required:true,
        maxLen:200,
    }
});

//export

module.exports = mongoose.model("Comment",commentSchema);