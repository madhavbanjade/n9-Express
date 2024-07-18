import mongoose from "mongoose";

let reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: [true, "productId field is required"],
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "userId is required"],
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
});

export default reviewSchema;
