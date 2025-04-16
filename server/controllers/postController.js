
const Post = require("../models/postModel");

//bussiness logic
exports.createPost = async(req,res) =>{
    try{
        const{name,title,body} = req.body;

        const post = new Post({
            name,title,body
        });

        const savedPost = await post.save();

        res.json({
            post:savedPost,
            message:"Post is successfully created",
        });
    }catch(err){
        return res.status(400).json({
            err:"Error while creating post",
        });
    }
}

exports.getById = async(req,res)=>{
    try{
        const{id} = req.body;

        const post = await Post.findById(id).populate(["likes","comments"]);

        res.json({
            post,
        });
    }catch(error){
        return res.status(400).json({
            error:"error while parsing that posts."
        });
    }
}

exports.getAllPosts = async(req,res)=>{
    try{
        const posts = await Post.find().populate(["comments"]).exec();

        res.json({
            posts,
        })
    }catch(err){
        return res.status(500).json({
            err:"Error while parsing all posts.",
        })
    }
}

//delete post 
exports.deletePost = async(req,res)=>{
    try{
        //step 1. post details find
        
        //step 2. comment array nikal lenge
        //step 3. saare comment and likes ko id ke throught delete karna hai
        
        //step 4. post delete karna hai 
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error while deleting the post."
        })
    }
}

