const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Thought = require('../models/Thought')

router.post('/:id', (req, res, next) => {
    const {likes} = req.body
    Thought.findByIdAndUpdate
    (req.params.id, 
        {$push: {likes: likes}}, {new: true})
        .populate({path: 'likes', populate: {path: 'user'}})
        .then(theLikedThought => {
            res.json(theLikedThought)
        })
})

module.exports = router