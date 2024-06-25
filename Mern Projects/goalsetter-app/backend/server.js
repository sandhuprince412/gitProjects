import express, { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import goalRouter from "./routes/goalRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
