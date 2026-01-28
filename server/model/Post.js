import mongoose from "mongoose";

const Schema = mongoose.Schema;
 
const Post = new Schema({
    content: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }
})

export default mongoose.model('Post', Post);