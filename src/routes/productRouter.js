import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readSpecificProductController,
  updateProductController,
} from "../controllers/productController.js";

let productRouter = Router();
productRouter
  .route("/")
  .post(createProductController)
  .get(readAllProductController);

//Dynamic route.
productRouter
  .route("/:id")
  .get(readSpecificProductController)
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRouter;
