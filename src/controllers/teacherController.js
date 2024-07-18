import { Teacher } from "../schema/model.js";

export const createTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.create(req.body);
    res.json({
      success: true,
      message: "teacher created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const readAllTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.find({});
    res.json({
      success: true,
      message: "Teacher created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.findById(req.params.id);
    res.json({
      success: true,
      message: "Teacher read specifically sucessfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Teacher update successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const deleteTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Teacher deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
