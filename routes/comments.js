const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Comment = require('../models/Comment');
const Thought = require('../models/Thought');
const User = require("../models/User");
const { route } = require("./auth");

// create a comment
router.post('/:id', (req, res, next) => {
    const {comment, user} = req.body
    Comment.create({
        comment, user
    })
    .then(theComment => {
        return Thought.findByIdAndUpdate
        (req.params.id,
            { $push: {comments: theComment._id}}, {new: true})
            .populate({path: 'comments', populate: {path: "user"}})
            .then(thought => {
                res.json(thought)
            })
            .catch(err => {
                res.json(err)
            })
    })
})

module.exports = router