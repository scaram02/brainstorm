const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Follow = require('../models/Follow')


// creates a Follow with its own id.
// this is pushed into User under followingInfo or whatev
// populates?
// need to add followER here too....
// and unfollow but maybe diff route altogether?
// router.post('/:id', (req, res, next) => {
//     const {following, followedBy} = req.body
//     Follow.create({
//         following, followedBy
//     })
//     .then(theFollow => {
//         return User.findByIdAndUpdate
//         (req.params.id, 
//             {$push: {followInfo: theFollow._id}}, {new: true})
//             .populate({path: 'following', populate: {path: "user"}})
//             .then(user => {
//                 res.json(user)
//             })
//             .catch(err => res.json(err))
//     })
// })


// this doesnt work
// router.put('/unfollow/:id', (req, res, next) => {
//     const userId = req.body.userId;
//     console.log('removed: ', userId)
//     User.findByIdAndUpdate(req.params.id, {$pull: {followInfo: userId}})
//     .then(updatedUser => {
//         console.log('am i updated or nah', updatedUser)
//         res.json(updatedUser)
//         return Follow.deleteOne({ _id: userId})
//         // maybe not userId but something else? followId? 
//         .then(follow => {
//             console.log('removed in follow.js backend: ', follow)
//         })
//         .catch(err => next(err))
//     })
// })


// need to erdo model
router.post('/:id', (req, res, next) => {
    const {following, followers} = req.body
   
        // theFollow = req.body.following? 
        // normal populate without path
        return User.findByIdAndUpdate
        (req.params.id, 
            {$push: {followers: followers}}, {new: true})
            .populate({path: 'followers', populate: {path: "user"}})
            .then(user => {
                res.json(user)
            })
            .catch(err => res.json(err))
        })
        


module.exports = router