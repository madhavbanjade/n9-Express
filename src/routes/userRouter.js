import { Router } from "express"; // from package
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readSpecificUserController,
  updateUserController,
} from "../controllers/userController.js"; //file import

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readAllUserController);

//Dynamic routes
userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRouter;
