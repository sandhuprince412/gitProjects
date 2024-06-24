import express, { Router } from "express";
//import dotenv from ("dotenv").config();
import router from "./routes/goalRoutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
