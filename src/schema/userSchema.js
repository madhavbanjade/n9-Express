import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  address: {
    type: String,
    required: [true, "address field is required"],
  },
  isMarried: {
    type: String,
    required: [true, "isMarried field is required"],
  },
  //   phoneNumber: {
  //     type: Number,
  //     required: [true, "phoneNumber field is required"],
  //     max: 10,
  //     min: 10,
  //   },
});

export default userSchema;
