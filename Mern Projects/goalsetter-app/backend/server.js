import express, { Router } from "express";
//import dotenv from ("dotenv").config();
import router from "./routes/goalRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/goals", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
