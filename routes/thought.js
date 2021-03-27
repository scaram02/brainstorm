const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const Thought = require('../models/Thought')

// add a thought
router.post('/', (req, res) => {
    const {thought, numUpvotes, upvotedBy, comments} = req.body

    Thought.create({
        thought, numUpvotes, upvotedBy, comments,
        user: [req.user._id]
    })
    .then(
        thought => {
            console.log("------This is my thought------", thought)
            res.json(thought)
        }
    )
    .catch(err => { res.json(err) })
})


// get thoughtS
router.get('/', (req, res) => {
    Thought.find()
    .populate('user')
    .then(thoughts => {
        res.json(thoughts)
    })
})

// get one thought
router.get('/:id', (req, res, next) => {
    Thought.findById(req.params.id)
    .populate('user')
    .populate({ path: "comments", populate: { path: "user" } })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
    });


// delete thought
router.delete('/:id', (req, res, next) => {
    Thought.findByIdAndRemove(req.params.id, req.body, (err, thought)=> {
        if (err) return next(err)
        res.json(thought)
    })
})

// edit thought
router.put('/edit/:id', (req, res, next) => {
    Thought.findByIdAndUpdate(req.params.id, req.body, (err, thought) =>{
        if (err) return next(err)
        res.json(thought)
    })
})




module.exports = router