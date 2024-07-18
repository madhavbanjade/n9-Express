// make express appliction
import express, { json } from "express";
import connectMongoDB from "./src/connectDB/mongo.js";
import userRouter from "./src/routes/userRouter.js";
import productRouter from "./src/routes/productRouter.js";
import teacherRouter from "./src/routes/teacherRouter.js";
import studentRouter from "./src/routes/studentRouter.js";
import booksRouter from "./src/routes/booksRouter.js";
import traineesRouter from "./src/routes/traineesRouter.js";
import classroomRouter from "./src/routes/classroomRouter.js";
import collageRouter from "./src/routes/collageRouter.js";
import departmentRouter from "./src/routes/departmentRouter.js";

import webUserRouter from "./src/routes/webUserRouter.js";
import fileRouter from "./src/routes/sendfileRouter.js";

//import firstRouter from "./src/routes/firstRouter.js";
// const myApp = express();
// //localhost: 3000
// //attach port to the express appliction

// const port = 3000;
// app.get("/product", (req, res, next) => {
//   res.json("hello");
// });
// app.listen(port);

// let firstRouter = Router();
// //api = defining task for each request.
// firstRouter.post("/",(req,res,next)=>{   // "/" localhost:3000/
//   res.json("first post");
// }).get((req,res,next)=>{
//   res.json("first  get");
// }).patch((req,res,next)=>{
//   res.json("first patch");
// }).delete((req,res,next)=>{
//   res.json("first delete");
// })

//myApp.use("/", firstRouter); //localhost:3000/first
/* localhost:3000/user/name   => we use this insted of using written in routers.
all the work is done inn index in browser we get the output done in index.js */

// we do  for api:
// schema   // make new
//model
// controller  // the controller and routers are used side by side. //make new
// routes     //make new
// index
// you do not need to change the application of express again and again
// when you make the new project just add it after the previous project..

// config();
// console.log(process.env.FULL_NAME);
// console.log(process.env.AGE);
// console.log(process.env.IS_MARRIED);\

const myApp = express();
myApp.use(express.static("./public")); //make public folder static for read files

connectMongoDB(); //connect database
myApp.use(json());

//read json file

myApp.use("/user", userRouter);
myApp.use("/product", productRouter);
myApp.use("/teacher", teacherRouter);
myApp.use("/student", studentRouter);
myApp.use("/books", booksRouter);
myApp.use("/trainees", traineesRouter);
myApp.use("/classroom", classroomRouter);
myApp.use("/collage", collageRouter);
myApp.use("/department", departmentRouter);
myApp.use("/web-User", webUserRouter);
myApp.use("/files", fileRouter);
myApp.listen(3000, () => {
  console.log("express is running in port 3000");
});
