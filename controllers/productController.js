const Product = require('../models/productModel');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/appError');


exports.createProduct = catchAsync( async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            product
        }
    })
})

exports.getAllProducts = catchAsync( async(req,res,next)=>{
    const products = await Product.find().populate({path:'comments'});
    res.status(200).json({
        status: 'success',
        data: {
            products
        }
    })
})

exports.updateProduct =  catchAsync(async (req,res,next)=>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if(!updatedProduct){
        return next(new AppError('No document found with this ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data:{
            product: updatedProduct
        }
    })
})

exports.deleteProduct =  catchAsync(async (req,res,next)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if(!deletedProduct){
        return next( new AppError('No document found with this ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: null
    })
})