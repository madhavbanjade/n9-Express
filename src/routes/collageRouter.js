import { Router } from "express";
import {
  createCollageController,
  deleteCollageController,
  readAllCollageController,
  readSpecificCollageController,
  updateCollageController,
} from "../controllers/collageControllers.js";

let collageRouter = Router();
collageRouter
  .route("/")
  .post(createCollageController)
  .get(readAllCollageController);
collageRouter
  .route("/:id")
  .get(readSpecificCollageController)
  .patch(updateCollageController)
  .delete(deleteCollageController);

export default collageRouter;
