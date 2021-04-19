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

// upload photo to Cloudinary
// https://www.youtube.com/watch?v=Rw_QeJLnCK4
// https://github.com/jamesqquick/cloudinary-react-and-node/blob/master/server/server.js
router.post('/photo/upload/', async (req, res) => {
    const {data} = req.body
    // console.log('-------', req.body.imageUrl)
    const uploadResponse = await cloudinary.uploader.upload(data, {
        upload_preset: 'ml_default' // set folder name/presets on Cloudinary
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({err: "uhhhh"})
    })
    
    console.log("uplooad resuponse", uploadResponse);
    res.json({ msg: 'done ', secure_url: uploadResponse.secure_url  });
})




module.exports = router;