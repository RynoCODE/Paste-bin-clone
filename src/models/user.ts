import { Document, Mongoose, Schema } from "mongoose";
import mongoose from "mongoose";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export interface user extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isverified: boolean;
}

const userSchema: Schema<user> = new Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [emailRegex, 'Please use valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    verifyCode: {
        type: String,
        required: [true, 'Verification code is required']
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verification code expiry is required']
    },
    isverified: {
        type: Boolean,
        default: false
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<user>) || mongoose.model<user>('User', userSchema);

export default UserModel;