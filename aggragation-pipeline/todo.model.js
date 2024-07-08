import { ObjectId } from 'bson';
import mongoose from 'mongoose';
import { type } from 'os';

const UserSchema = new mongoose.Schema({
    nmae: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    createdby: {
        type: ObjectId.mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

}
    ,
    { timestamps: true }
)

const User = mongoose.model('User', UserSchema)