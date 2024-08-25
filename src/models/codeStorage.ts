import { Document, Mongoose, Schema } from "mongoose";
import mongoose from "mongoose";

export interface codeStorage extends Document{
    uuid: string;
    code: string;
}

const codeStorageSchema: Schema<codeStorage> = new Schema({
    uuid:{
        type: String,
        required: [true, 'UUID is required'],
        unique: true,
        trim: true
    },
    code: {
        type: String,
        required: [true, 'Code is required']
    }
})

const CodeStorageModel = (mongoose.models.CodeStorage as mongoose.Model<codeStorage>) || mongoose.model<codeStorage>('CodeStorage', codeStorageSchema);

export default CodeStorageModel;