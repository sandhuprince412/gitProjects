import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/my-blog")
    .then(() => {
      console.log("successfully connected to Database");
    })
    .catch((err) => {
      console.log(`Error occured while connecting to database ${err}`);
    });
};

export default dbConnection;
