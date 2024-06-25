import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
const router = express.Router();

//@desc     Register new user
//@route    POST /api/users
//@access   Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please enter all fields");
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new error("User already exists");
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new error("Invalid user");
    }
  })
);

//@desc     Authenticate a user
//@route    POST /api/users/login
//@access   Public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    res.json({ message: "Login User" });
  })
);

//@desc     Get user data
//@route    GET /api/users/me
//@access   Public
router.get(
  "/me",
  asyncHandler(async (req, res) => {
    res.json({ message: "User data display" });
  })
);

export default router;
