import mongoose from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import teacherSchema from "./teacherSchema.js";
import studentSchema from "./studentSchema.js";
import BooksSchema from "./booksSchema.js";
import traineesSchema from "./traineesSchema.js";
import classroomSchema from "./classroomSchema.js";
import collageSchema from "./collageSchema.js";
import departmentSchema from "./departmentSchema.js";
import webUserSchema from "./webUserSchema.js";
import reviewSchema from "./reviewSchema.js";

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", productSchema);
export const Teacher = mongoose.model("Teacher", teacherSchema);
export const Student = mongoose.model("Student", studentSchema);
export const Books = mongoose.model("Books", BooksSchema);
export const Trainees = mongoose.model("Trainees", traineesSchema);
export const Classroom = mongoose.model("Classroom", classroomSchema);
export const Collage = mongoose.model("Collage", collageSchema);
export const Department = mongoose.model("Department", departmentSchema);
export const Review = mongoose.model("Review", reviewSchema);
export const WebUser = mongoose.model("WebUser", webUserSchema);

// we use same model for multiple schema for less confusion with diffrent file.
