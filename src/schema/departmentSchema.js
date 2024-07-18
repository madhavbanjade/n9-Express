import mongoose from "mongoose";

let departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " name field is required"],
  },
  hod: {
    type: String,
    required: [true, " hod field is required"],
  },
  totalMembers: {
    type: String,
    required: [true, " totalMembers field is required"],
  },
});

export default departmentSchema;
