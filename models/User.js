const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String, 
    following: [
    {
        user:{ 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }
    }],
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ]},
  {
    timestamps: true
  });

const User = mongoose.model("User", userSchema);
module.exports = User;
