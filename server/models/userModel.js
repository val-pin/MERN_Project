import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "defaultAvatar.png" },
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
