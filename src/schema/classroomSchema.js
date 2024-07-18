import mongoose from "mongoose";

let classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "naame field is required"],
  },
  numberOfBench: {
    type: Number,
    required: [true, "numberOfBench field is required"],
  },
  hasTv: { type: Boolean, required: [true, "hasTv field is required"] },
});
export default classroomSchema;
