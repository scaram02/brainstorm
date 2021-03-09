const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thought: String,
    numUpvotes: Number,
    upvotedBy: Array,
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
}
);

const Thought = mongoose.model("Thought", thoughtSchema);
module.exports = Thought;

