import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_CONNECT;

const connectDB = async() =>{
    try{
        await mongoose.connect(uri);

        console.log(`MongoDB connected: ${uri}`);

    }catch(error){
        console.error('MongoDb connection error:', error);
        process.exit(1);
    }
}

export default connectDB;