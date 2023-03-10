import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    desc:{ type: String},
    location: { type: String},
    details:{type:String},
    hide: { type: Boolean , default:false},
    imageUrl:{type:String },
    offcomts:{type:Boolean , default:false},
    postedUsername:{type:String },
    postedImg:{type:String }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;