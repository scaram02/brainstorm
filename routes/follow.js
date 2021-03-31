const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");



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

     // UNFOLLOW
   router.post('/unfollow/:id', (req, res, next) => {
     const {following, followers} = req.body
         User.findByIdAndUpdate
           (req.params.id, 
             {$pull: {followers: followers}}, {new: true})
               .then(user => {
                 return User.findByIdAndUpdate({ _id: followers}, 
                  { $pull: {following: req.params.id}}, {new: true})
                            // console.log("BLAAHHH set the return User as const blah to check hthis", blah)
                    .then(user => {
                        // console.log("is this undefined", user)
                       res.json(user)})
                    })
                    .catch(err => res.json(err))
                })

   
        
// get all users following then get their posts
// to add alter for feed

module.exports = router