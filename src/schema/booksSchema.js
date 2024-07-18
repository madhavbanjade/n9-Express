import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  author: {
    type: String,
    required: [true, "author field is required"],
  },
  price: {
    type: Number,
    required: [true, "price field is required"],
  },
  isAvailable: {
    type: Boolean,
    message: [true, "isAvailable field is required"],
  },
});

export default BooksSchema;
