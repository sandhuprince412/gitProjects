import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gmohkfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
      console.log("successfully connected to Database");
    })
    .catch((err) => {
      console.log(`Error occured while connecting to database ${err}`);
    });
};

export default dbConnection;
