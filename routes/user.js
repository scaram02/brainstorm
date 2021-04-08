const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

// need to move stuff from auth route here eventually!!!!! check it out

router.put('/edit/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) return next(err)
        res.json(user)
    })
})


module.exports = router;