import mongoose from "mongoose";

const traineesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
  faculty: {
    type: String,
    required: [true, "experience field is required"],
  },
});

export default traineesSchema;
