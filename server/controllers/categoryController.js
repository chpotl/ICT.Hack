const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Category = require('../models/categoryModel');

exports.getAll = catchAsync(async (req, res, next) => {
  const category = await Category.find();
  res.status(200).json({
    message: 'success',
    category,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newCategory = await Category.create({
    name: req.body.name,
  });
  res.status(200).json({
    message: 'success',
    newCategory,
  });
});
