import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        text: { type: String },
        postId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
        commentBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        replies: [
          {
            text: { type: String },
            repliedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          },
        ],
    },
    {
      timestamps: true,
    }
  );
  
  const Comments = mongoose.models.Comments || mongoose.model('Comments', commentSchema);
  export default Comments;