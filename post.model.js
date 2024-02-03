import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  content: String,
  createdAt: String,
  isPublic: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  }
});

const PostModel = mongoose.model("post", PostSchema);

export { PostModel };