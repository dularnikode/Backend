import User from "../models/user.js";

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json({
    success: true,
    users,
  });
};

const createNewUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).cookie("temp", "lolll").json({
      success: true,
      user,
    });
  } catch (error) {
    res.send("something went wrong");
  }
};

const getSpecialUsers = (req, res) => {
  res.json({
    success: true,
    message: "Just Jocking",
  });
};

const getUserByUserId = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  res.json({
    success: true,
    user,
  });
};

export { getAllUsers, createNewUser, getSpecialUsers ,getUserByUserId };
