
//1 express import
const express = require("express");
//2. router create
const router = express.Router();
//3. controller import
const {createPost,getAllPosts,getById,deletePost} = require("../controllers/postController");
const {likePost} = require("../controllers/likeController");
const {createComment,deleteComment,updateComment} = require("../controllers/commentController");
//4. route define
router.post("/create/post",createPost);
router.delete("/post/delete",deletePost);
router.get("/posts",getAllPosts);
router.get("/getById",getById);
router.post("/likes/like",likePost);
router.post("/comments/create",createComment);
router.post("/comments/delete",deleteComment);
router.post("/comments/update",updateComment);
//5. export
module.exports = router;