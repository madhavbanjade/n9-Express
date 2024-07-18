import { Router } from "express";
import {
  createClassroomController,
  deleteClassroomController,
  readAllClassroomController,
  readSpecificClassroomController,
  updateClassroomController,
} from "../controllers/classroomController.js";

let classroomRouter = Router();
classroomRouter
  .route("/")
  .post(createClassroomController)
  .get(readAllClassroomController);

//Dynamic route :-
classroomRouter
  .route("/:id")
  .get(readSpecificClassroomController)
  .patch(updateClassroomController)
  .delete(deleteClassroomController);

export default classroomRouter;
