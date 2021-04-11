const express = require("express");
const router = express.Router();
const User = require("../models/User");


// need to move stuff from auth route here eventually!!!!! check it out

router.put('/edit/:id', (req, res, next) => {
    const {bio} = req.body
    User.findByIdAndUpdate(req.params.id, bio, (err, user) => {
        if (err) return next(err)
        res.json(user)
    })
})


module.exports = router;