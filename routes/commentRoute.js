const express = require('express');
const commentController = require('../controllers/commentContoller');

const router = express.Router();

router.route('/')
    .post(commentController.createComment)
    .get(commentController.getAllComments);
router.patch('/update/:id', commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;