const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thought: String,
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [
        {
       type: Schema.Types.ObjectId,
       ref: "Comment"
       }],
    user: 
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
  }
);

const Thought = mongoose.model("Thought", thoughtSchema);
module.exports = Thought;

