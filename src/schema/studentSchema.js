import mongoose from "mongoose";

let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  level: {
    type: String,
    required: [true, "level field is required"],
  },
  idNo: {
    type: Number,
    required: [true, "idNo field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "university field is required"],
  },
});

export default studentSchema;
