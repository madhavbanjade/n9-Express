import mongoose from "mongoose";

let teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  position: {
    type: String,
    required: [true, "position field is required"],
  },
  salary: {
    type: Number,
    required: [true, "salary is required"],
  },
  subject: {
    type: String,
    required: [true, "subject field is required"],
  },
});

export default teacherSchema;
