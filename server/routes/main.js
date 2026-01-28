import express from "express";
import Post from "../model/Post.js";
import Like from "../model/Like.js";
import User from "../model/User.js";
const router = express.Router();

router.use('/', async (req, res)=>{
    try{
        const posts =await Post.find()
        res.render('index', {posts});
    }catch(error){
        console.log(error);
    }
        
})

export default router;