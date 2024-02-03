import express from "express";
import { asyncCatch } from "../trycatch.js";
import { getAll, createUser } from "../model/user.service.js";

const userController = express.Router();

userController.get("/", asyncCatch(getAll));
userController.post("/", asyncCatch(createUser));

export { userController };