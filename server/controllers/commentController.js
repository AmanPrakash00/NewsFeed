const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
// const { post } = require("../routes/newsfeeds");

exports.createComment = async(req,res)=>{
    try{
        //fetch the post,user and body through request
        const{post,user,body} = req.body;

        //create obj of 
        const comment = new Comment({
            post,user,body
        });

        //push to db 
        const savedComment = await comment.save();

        //update to the post 
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments").exec();

        res.json({
            post : updatedPost,
        });
    }catch(error){
        return res.status(500).json({
            errror:"Error whlie posting the comment.",
        });
    }
}
exports.updateComment = async(req,res)=>{
    try{
        const{post,comment,user,body} = req.body;
        console.log("Post id is ",post);
        const postDe = await Post.findById(post);
        console.log("This is post id ",postDe);
        const updatedComment = await Comment.findByIdAndUpdate({post:post,_id:comment},{user:user,body:body},{new:true});
    
        return res.status(200).json({
            success:true,
            message:"Comment successfully updated.",
            updatedComment,
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error while updating the post",
        })
    }
}
exports.deleteComment = async(req,res)=>{
    
    try{
        const{post,comment} = req.body;

        const deleteComment = await Comment.findByIdAndDelete({post:post,_id:comment});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{comments:deleteComment._id}},{new:true}).populate(["likes","comments"]).exec();

        res.json({
            post:updatedPost,
            message : "successfully deleted that comment.",
        })
    }catch(err){
        return res.status(500).json({
            err:"Can't find the post.",
        })
    }
}