const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const Thought = require('../models/Thought')

// add a thought
router.post('/', (req, res) => {
    const {thought, numUpvotes, upvotedBy} = req.body

    Thought.create({
        thought, numUpvotes, upvotedBy,
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


// get thoughts
router.get('/', (req, res) => {
    Thought.find()
    .populate('user')
    .then(thoughts => {
        res.json(thoughts)
    })
})

// edit a thought
router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    console.log("backend id", id)
    // Thought.findByIdAndUpdate(id, )
})

module.exports = router