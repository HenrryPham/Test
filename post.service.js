import { PostModel } from "./post.model.js";
import { UserModel } from "./user.model.js";

export const createPost = async (req, res, next) => {
  const { content, createdAt, isPublic } = req.body;
  const post = await PostModel.create({ content, createdAt, isPublic });
  await UserModel.findByIdAndUpdate(userId, { $push: { posts: post._id } });
  res.status(201).send(post);
};