import { Trainees, User } from "../schema/model.js";

export const createTraineesController = async (req, res, next) => {
  try {
    let data = await Trainees.create(req.body);
    res.json({
      success: true,
      message: "trainees created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const readAllTraineesController = async (req, res, next) => {
  try {
    let data = await Trainees.find({});
    res.json({
      success: true,
      message: "trainees created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTraineesController = async (req, res, next) => {
  try {
    let data = await User.findById(req.params.id);
    res.json({
      success: true,
      message: "Trainees  read specifically successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTraineesController = async (req, res, next) => {
  try {
    let data = await Trainees.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Trainees update successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTraineesController = async (req, res, next) => {
  try {
    let data = await Trainees.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Trainees deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
