const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String, 
  //   followers: [
  //   {
  //       user:{ 
  //           type: Schema.Types.ObjectId, 
  //           ref: 'User' 
  //       }
  //   }],
  following: [
    {
    
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
  // followInfo: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Follow"
  //   }
  // ]
},
  {
    timestamps: true
  });

const User = mongoose.model("User", userSchema);
module.exports = User;
