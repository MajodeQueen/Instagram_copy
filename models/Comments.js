import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: {type:String},
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    commentBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.models.Comments || mongoose.model('Comments', commentSchema);
export default Comments;