import mongoose, { mongo } from "mongoose";
import { PostModel } from "./post.model.js";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    dob: Date,
    nationalaty: String,
    email: String,
    password: String,
    gender: String,
    phone: String,
    address: String,
    avatar: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
    roles: [String],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ]
  }
);

const UserModel = mongoose.model("user", UserSchema);

export { UserModel };