const mongoose = require('mongoose');
const slugify = require('slugify');


const productSchema  = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name for product field'],
        minLength: 4
    },
    count: {
        type: Number
    },
    size: {
        width: Number,
        height: Number
    },
    imageUrl: {
        type: String
    },
    weight: {
      type: String
    },
    slug: String
})

productSchema.virtual('comments', {
    ref: 'Comment',
    foreignField: 'product',
    localField: '_id'
})

productSchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
