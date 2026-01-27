import mongoose from "mongoose";
import User from "./User";

const Schema = mongoose.Schema;

const Post = new Schema({
    content: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
})

export default mongoose.model('Post', Post);