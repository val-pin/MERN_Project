import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: {
    type: String,
    default:
      "https://imgix.ranker.com/node_img/52/1023127/original/frederick-law-olmsted-writers-photo-1?w=250&q=50&fm=pjpg&fit=crop&crop=faces",
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
