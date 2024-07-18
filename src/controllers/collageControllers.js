import { Collage } from "../schema/model.js";

export const createCollageController = async (req, res, next) => {
  try {
    let data = await Collage.create(req.body);
    res.json({
      success: true,
      message: "Collage created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllCollageController = async (req, res, next) => {
  try {
    let data = await Collage.find({});
    res.json({
      success: true,
      message: "Collage read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificCollageController = async (req, res, next) => {
  try {
    let data = await Collage.findById(req.params.id);
    res.json({
      success: true,
      message: "Collage readSpecificId successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCollageController = async (req, res, next) => {
  try {
    let data = await Collage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Collage updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCollageController = async (req, res, next) => {
  try {
    let data = await Collage.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Collage deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
