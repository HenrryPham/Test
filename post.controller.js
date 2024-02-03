import express from "express";
import { asyncCatch } from "../trycatch.js";
import { createPost, deletePost } from "../model/post.service.js";

const postController = express.Router();

postController.post("/", asyncCatch(createPost));
postController.delete("/:postId", asyncCatch(deletePost));

export { postController };