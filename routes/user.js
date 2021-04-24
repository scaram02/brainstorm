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
router.post('/photo/upload', async (req, res, next) => {
    const {imageUrl} = req.body
    // console.log('-------', req.body.imageUrl)
    const uploadResponse = await cloudinary.uploader.upload(imageUrl, {
        upload_preset: 'ml_default' // set folder name/presets on Cloudinary
    })
    console.log("uplooad resuponse", uploadResponse);
    res.json({secure_url: uploadResponse.secure_url  });
})



// photo => user
router.put('/photo/:username', (req, res) => {
    const {imageUrl} = req.body
    console.log("usr", req.params.username)
    // console.log('backend imageurl only shows if already preview image though hm ---> : ', imageUrl)
    User.findOneAndUpdate({username: req.params.username},{imageUrl: req.body.imageUrl}, {new: true })
    .then((user) => res.json(user))
        // .catch(err => res.status(500).json(err))
})


module.exports = router;