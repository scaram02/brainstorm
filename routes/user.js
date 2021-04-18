const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {cloudinary} = require('../utils/cloudinary.js')


// need to move stuff from auth route here eventually!!!!! check it out


// add/edit? bio
router.put('/edit/:id', (req, res, next) => {
    const {bio} = req.body
    User.findByIdAndUpdate(req.params.id, bio, { new: true }, (err, user) => {
        if (err) return next(err)
        res.json(user)
    })
})

// upload photo?
router.post('/photo/upload/', async (req, res) => {
    const imageUrl = req.body.imageUrl
    // console.log('-------', req.body.imageUrl)
    const uploadResponse = await cloudinary.uploader.upload(imageUrl, {
        upload_preset: 'ml_default',
    })
    .catch((err) => {
        console.log(err)
        // res.status(500).json({err: "uhhhh"})
    })
    
    console.log("uplooad resuponse", uploadResponse);
    res.json({ msg: 'done ' });
})




module.exports = router;