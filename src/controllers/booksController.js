import { Books } from "../schema/model.js";

export const createBooksController = async (req, res, next) => {
  try {
    let data = await Books.create(req.body);
    res.json({
      success: true,
      message: "books created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const readAllBooksController = async (req, res, next) => {
  try {
    let data = await Books.find({});
    res.json({
      success: true,
      message: "Books created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificBooksController = async (req, res, next) => {
  try {
    let data = await Books.findById(req.params.id);
    res.json({
      success: true,
      message: "Books read specific successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBookController = async (req, res, next) => {
  try {
    let data = await Books.findByIdAndUpdate(req.params.data, req.body, {
      new: true,
    });

    res.json({
      success: true,
      message: " Books update successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBooksController = async (req, res, next) => {
  try {
    let data = await Books.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Books delete successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
