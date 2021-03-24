const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Follow = require('../models/Follow')


// follow a user, you are now also their follower
router.post('/:id', (req, res, next) => {
    const {following, followers} = req.body
     User.findByIdAndUpdate
        (req.params.id, 
            {$push: {followers: followers}}, {new: true})
            .populate({path: 'followers', populate: {path: "user"}})
            .then(user => {
              return User.findByIdAndUpdate({ _id: followers}, 
                { $push: {following: user}}, {new: true})
                .populate({path: "following", populate: {path: 'user'}})
                .then(user => {
                    res.json(user)
                })
            })
            .catch(err => res.json(err))
        })


// LAURA
// router.post('/:id', (req, res, next) => {
//     const {following, followers} = req.body
    
//      User.findByIdAndUpdate
//         (req.params.id, 
//             {$push: {followers: followers}}, {new: true})
//             // .populate("User")
//             .populate({path: 'followers', populate: {path: "user"}})
//             // .then(user => {
//             //  User.findByIdAndUpdate({ _id: followers}, 
//             //     { $push: {following: user}}, {new: true})
//             //     // .populate({path: "following", populate: {path: 'user'}})
//             //     .populate("User")
//             //     .then(user => {
//             //         res.json(user)
//             //     })
//             // })
//             .then(data => res.json(data))
//             .catch(err => res.json(err))
//         })


        // TO UNFOLLOW. COME BACK TO THIS
        // router.post('/unfollow/:id', (req, res, next) => {
        //     const {following, followers} = req.body
        //      User.findByIdAndUpdate
        //         (req.params.id, 
        //             {$pull: {followers: followers}})
        //             .then(user => {
        //                 res.json(user)
        //             })
        //             .catch(err => res.json(err))
        //         })
        


module.exports = router