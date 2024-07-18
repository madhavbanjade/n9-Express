import mongoose from "mongoose";

const connectMongoDB = () => {
  mongoose.connect("mongodb://localhost:27017/n9");
  console.log("connected to MongoDB Database");
};

export default connectMongoDB;

// this file is used only one time  to connect the database.
