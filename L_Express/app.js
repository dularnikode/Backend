import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

const app = express();

config({
  path: "./data/config.env",
});

/**MIDDLE WARE */
// using Middleware to get json data
app.use(express.json());

/**ROUTES */
// User Routes
app.use("/user", userRouter);

export default app;
