import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: false   
    },
    createdDate: {
        type: Date
    },
    originalname: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    }
});


const post = mongoose.model('post', PostSchema);

export default post;