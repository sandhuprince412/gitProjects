import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "Restaurant" })
    .then(() => {
      console.log("successfully connected to Database");
    })
    .catch((err) => {
      console.log(`Error occured while connecting to database ${err}`);
    });
};

export default dbConnection;
