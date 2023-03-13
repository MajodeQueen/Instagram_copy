import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true ,unique:true  },
    name:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image:{type:String ,default:'/images/PngItem_1503945.png'},
    websites: { type: String },
    bio:{ type: String },
    number:{ type: String },
    gender:{ type: String },
    sug:{ type: Boolean},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;