export const createReviewController = async (req, res, next) => {
  try {
    let data = await Review.create(req.body);
    res.json({
      success: true,
      message: "Review created successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
