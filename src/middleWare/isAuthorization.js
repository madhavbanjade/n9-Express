import { WebUser } from "../schema/model.js";

let isAuthorization = (roles) => {
  return async (req, res, next) => {
    try {
      let id = req._id;
      let result = await WebUser.findById(id);
      let tokenRole = result.role;
      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "User not authorized",
        });
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default isAuthorization;
