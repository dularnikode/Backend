import express from "express";
import {
  createNewUser,
  getAllUsers,
  getSpecialUsers,
  getUserByUserId,
} from "../controller/user.js";

const userRouter = express.Router();

userRouter.get("/all", getAllUsers);

userRouter.post("/new", createNewUser);

userRouter.get("/special", getSpecialUsers);

/**Keep dynamic routes at the end of all the routes */
userRouter.get("/:userId", getUserByUserId);

export default userRouter;
