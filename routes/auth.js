const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

router.post("/signup", (req, res) => {
  const { username, password, following, followers } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  if (username.includes(' ')){
    return res.status(400).json({ message: "Username can't contain spaces"})
  }
// checks if existing, now is not case sensitive
  User.findOne({ username: username.toLowerCase() })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      return bcryptjs
        .genSalt()
        .then(salt => {
          return bcryptjs.hash(password, salt);
        })
        .then(hash => {
          return User.create({ username: username, password: hash, following: following, followers: followers });
        })
        .then(newUser => {
          // passport login
          req.login(newUser, err => {
            if (err) res.status(500).json(err);
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


const passport = require("passport");
const { default: axios } = require("axios");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      // no user found with username or password didn't match
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // passport req.login
    req.login(user, err => {
      if (err) res.status(500).json(err);
      res.json(user);
    });
  })(req, res, next);
});

router.delete("/logout", (req, res) => {
  // passport logout function
  req.logout();
  res.json({ message: "Successful logout" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});



// get a user by username (not login purposes but profile)
router.get("/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .populate({
      path: "user" 

    })
    .then(user => {
      if (!user) {
        res.status(404).json({ message: "This user does not exist" });
      } else res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// get all users
router.get('/', (req, res, next) => {
  User.find()
  .then(users => {
    res.json(users)
    // console.log("here are th eusers", users)
  })
})

// hmmm, res.200 was .post though
router.get('/follow/:id', (req, res) => {
  User.findByIdAndUpdate(req.body.userId, {
    $push:{followers: req.user._id}
  }, 
  {new: true}, 
  (err, result) => {
    if(err){
      return res.status(422).json({error:err})
  }
  console.log('good sof ra')
// User.findByIdAndUpdate(req.user._id,{
//     $push:{following: req.params.userId} // body?
    
// },{new:true})
.then(result=>{
    res.json(result)
}).catch(err=>{
    return res.status(422).json({error:err})
})
  })
})



// router.put(`/follow/:id`, (req, res, next) => {
//   const userId = req.body.userId
//   console.log("--------the userId", userId)
//   User.findByIdAndUpdate(
//     req.params.id, 
//     {$push: {followers: userId}}, {new: true})
//     .populate({path: "followers", populate: {path: 'user'}})
//     .then(user => {
//       res.json(user)
//       console.log(res.json)
//     })
//     .catch(err => {
//       next(err)

//     })
//     // .catch(err => {
//     //   res.json(err)
     
//     // })
// })

// maybe I .get the user and then .put ???
// axios.get(`/follow/:id`, (req, res, next) => {
//   User.findByIdAndUpdate(req.user.id, 
//     {$push: {followers: req.body.userId}}) /// params? body?
//  console.log("res.status: ", res.status, "follwowers; ", followers, "req.user.id", req.user.id)
// next();
// })

https://kevinurielfonseca.com/snippets/complex-queries-with-nodejs/





// router.put(`/follow/:id`, (req, res, next) => {
// const userId = req.body.userId;
// User.findByIdAndUpdate(req.params.id, req.body, {$push: {followers: userId}})
// .populate({path: "followers", populate: {path: 'user'}})
// if (err) return next(err)
// res.json(user)
// })

module.exports = router;
