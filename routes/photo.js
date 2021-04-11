const express = require("express");
const router = express.Router();

// upload photo?
router.post('./upload', (req, res) => {
    if (!req.file){
        res.status(404).json({message: 'no photo hath been uplaoded'})
    } else {
        res.json({message: "successful upload bro!"})
    }
    
})





module.exports = router