import mongoose from "mongoose";
import { config } from 'dotenv';
config();

const { URL_MONGODB } = process.env;

export const connectDB = async () => {
    try {
        await mongoose.connect(URL_MONGODB);
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
}
