import { Router } from "express";
import {
  createWebUserController,
  deleteWebUserController,
  forgetPassword,
  loginWebUser,
  myProfile,
  readSpecificWebUserController,
  readWebUserController,
  resetPassword,
  updateMYProfile,
  updatePassword,
  updateSpecificWebUserController,
  verifyEmail,
} from "../controllers/webUserController.js";
import { isAuthenticated } from "../middleWare/isAuthenticated.js";
import isAuthorization from "../middleWare/isAuthorization.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter
  .route("/")
  .get(
    isAuthenticated,
    isAuthorization(["admin", "superAdmin"]),
    readWebUserController
  );
webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(loginWebUser);
webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-Profile").patch(isAuthenticated, updateMYProfile);
webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
webUserRouter.route("/forget-password").post(forgetPassword);
webUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword);

webUserRouter
  .route("/:id")
  .get(
    isAuthenticated,
    isAuthorization(["admin", "superAdmin"]),
    readSpecificWebUserController
  );
webUserRouter
  .route("/:id")
  .patch(
    isAuthenticated,
    isAuthorization(["superAdmin"]),
    updateSpecificWebUserController
  );
webUserRouter
  .route("/:id")
  .delete(
    isAuthenticated,
    isAuthorization(["superAdmin"]),
    deleteWebUserController
  );
export default webUserRouter;
