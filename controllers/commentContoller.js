const Comment = require('../models/commentModel');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/appError');

exports.createComment = catchAsync(async (req,res,next)=>{
    const comment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            comment
        }
    })
})

exports.getAllComments = catchAsync( async(req,res,next)=>{
    const comments = await Comment.find();

    res.status(200).json({
        status: 'success',
        data: {
            comments
        }
    })
})

exports.updateComment =  catchAsync(async (req,res,next)=>{
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    });
    if(!updatedComment){
        return next(new AppError('No document found with this ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data:{
            data: updatedComment
        }
    })
})

exports.deleteComment =  catchAsync(async (req,res,next)=>{
    const deletedComment = await Comment.findByIdAndDelete(req.params.id)
    if(!deletedComment){
        return next(new AppError('No document found with this ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: null
    })
})