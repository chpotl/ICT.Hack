const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Tag = require('../models/tagModel');

exports.getAll = catchAsync(async (req, res, next) => {
  const tag = await Tag.find();
  res.status(200).json({
    message: 'success',
    tag,
  });
});
