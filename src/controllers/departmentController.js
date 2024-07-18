import { Department } from "../schema/model.js";

export const createDepartmentController = async (req, res, next) => {
  try {
    let data = await Department.create(req.body);
    res.json({
      success: true,
      message: "Department created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllDepartmentController = async (req, res, next) => {
  try {
    let data = await Department.find({});
    res.json({
      success: true,
      message: "Department readAll successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificDepartmentController = async (req, res, next) => {
  try {
    let data = await Department.findById(req.params.id);
    res.json({
      success: true,
      message: "Department read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDepartmentController = async (req, res, next) => {
  try {
    let data = await Department.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Department updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDepartmentController = async (req, res, next) => {
  try {
    let data = await Department.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Department deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
