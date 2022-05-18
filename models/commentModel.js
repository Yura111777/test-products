const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Group must have name. Please add name'],
            unique: true
        },
        description: {
            type: String,
        },
        product: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
        }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });



const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;