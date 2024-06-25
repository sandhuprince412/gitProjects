import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

//@desc     Register new user
//@route    POST /api/users
//@access   Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please enter all fields");
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User

    const user = await User.create({
      user: name,
      email: email,
      Password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.user,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user");
    }
  })
);

//@desc     Authenticate a user
//@route    POST /api/users/login
//@access   Public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //check for user email
    const user = await User.findOne({ email });
    console.log(user);

    if (user && (await bcrypt.compare(password, user.Password))) {
      res.json({
        _id: user.id,
        name: user.user,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  })
);

//@desc     Get user data
//@route    GET /api/users/me
//@access   Private
router.get(
  "/me",
  protect,
  asyncHandler(async (req, res) => {
    const { _id, user, email } = await User.findById(req.user.id);

    res.status(200).json({ id: _id, user, email });
  })
);

//Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default router;
