const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Follow = require('../models/Follow')


// creates a Follow with its own id.
// this is pushed into User under followingInfo or whatev
// populates?
// need to add followER here too....
router.post('/:id', (req, res, next) => {
    const {following, followedBy} = req.body
    Follow.create({
        following, followedBy
    })
    .then(theFollow => {
        return User.findByIdAndUpdate
        (req.params.id, 
            {$push: {followInfo: theFollow._id}}, {new: true})
            .populate({path: 'following', populate: {path: "user"}})
            .then(user => {
                res.json(user)
            })
            .catch(err => res.json(err))
    })
})


module.exports = router