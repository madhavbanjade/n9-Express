import { Router } from "express";
import {
  createBooksController,
  deleteBooksController,
  readAllBooksController,
  readSpecificBooksController,
  updateBookController,
} from "../controllers/booksController.js";

let booksRouter = Router();
booksRouter.route("/").post(createBooksController).get(readAllBooksController);

booksRouter
  .route("/:id")
  .get(readSpecificBooksController)
  .patch(updateBookController)
  .delete(deleteBooksController);

export default booksRouter;
