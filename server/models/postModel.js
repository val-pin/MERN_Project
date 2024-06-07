import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  name: { type: String, required: true, unique: true },
  date: { type: Number, required: true },
  comment: { type: String },
  likes: Number,
});

const PostModel = mongoose.model("post", postSchema);

export default PostModel;
