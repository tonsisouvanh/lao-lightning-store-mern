import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog", // Assuming you have a Blog model
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

