import mongoose from "mongoose";

let collageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  location: {
    type: String,
    required: [true, "location field is  required"],
  },
});

export default collageSchema;
