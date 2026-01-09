import { error } from "console";
import mongoose, { mongo } from "mongoose";
export async function connect() {
    try{
        mongoose.connect(process.env.mongo_URI!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('Connected to MongoDb successfully!');
        })
        connection.on('error',()=>{
            console.log('Mongodb connection error.'+error)
            process.exit();
        })
    }
    catch(err){
        console.log('something goes wrong!!')
        console.log(err)
    }
}