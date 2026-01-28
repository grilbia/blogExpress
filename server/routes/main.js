import express from "express";
import Post from "../model/Post.js";
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