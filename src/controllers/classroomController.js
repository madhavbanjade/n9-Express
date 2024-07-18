import { Classroom } from "../schema/model.js";

export const createClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.create(req.body);
    res.json({
      success: true,
      message: "Classroom  created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.find({});

    res.json({
      success: true,
      message: "Classroom read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const readSpecificClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.findById(req.params.id);
    res.json({
      success: true,
      message: " Classroom read specifically successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Classroom updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Classroom deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
