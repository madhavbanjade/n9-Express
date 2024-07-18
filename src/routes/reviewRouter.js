import { Router } from "express";
import { createReviewController } from "../controllers/reviewController.js";

let reviewRouter = Router();
reviewRouter.route("/").post(createReviewController);

export default reviewRouter;
