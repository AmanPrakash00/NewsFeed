const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async(req,res)=>{
    //parse post id,user
    try{
        const{post,user,code} = req.body;

        // check if this is already 
        const existPost = await Post.findById({_id:post});
        if(!existPost){
            return res.status(400).json({
                success:false,
                message:"Post is not available Enter correct post Id."
            })
        }
        const likeDetails = existPost.likes;
        // console.log("Like Details Below")
        // console.log(likeDetails);
        // traverse all the obj id of like in this curr post
        for(const likeId of likeDetails){
            const currLikeDetails = await Like.findById({_id:likeId}).populate().exec();
            // console.log("Code is :");
            // console.log(currLikeDetails.code);
            if(currLikeDetails.code === code){
                return res.status(400).json({
                    success:false,
                    message:"User already liked this post."
                })
            }
            console.log("next")
        }

        const like = new Like({
            post,user,code
        });
    
        const savedLike = await like.save();

        //update post wale main
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate("likes").exec();

        res.json({
            post:updatedPost,
        });
    }catch(err){
        return res.status(400).json({
            err:"Error while like the post",
        });
    }
}