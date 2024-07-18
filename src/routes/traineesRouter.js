import { Router } from "express";
import {
  createTraineesController,
  deleteTraineesController,
  readAllTraineesController,
  readSpecificTraineesController,
  updateTraineesController,
} from "../controllers/traineesController.js";

let traineesRouter = Router();
traineesRouter
  .route("/")
  .post(createTraineesController)
  .get(readAllTraineesController);

traineesRouter
  .route("/:id")
  .get(readSpecificTraineesController)
  .patch(updateTraineesController)
  .delete(deleteTraineesController);

export default traineesRouter;
