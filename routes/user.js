const express = require("express");
const router = express.Router();
const User = require("../models/User");


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
router.post('/photo/upload/:id', (req, res) => {
    if (!req.file){
        res.status(404).json({message: 'no photo hath been uplaoded'})
    } else {
        const {imageUrl} = req.body
        User.findByIdAndUpdate(req.params.id, imageUrl, { new: true }, (err, user) => {
            if (err) return next(err)
            res.json(user)
        })
        // res.json({message: "successful upload bro!"})
    }
    
})




module.exports = router;