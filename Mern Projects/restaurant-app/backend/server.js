import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRoutes.js";

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(urlencoded({ extended: true }));

dbConnection();

app.use(errorMiddleware);

app.use("/api/reservation", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
