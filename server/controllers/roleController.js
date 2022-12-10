const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Role = require('../models/roleModel');

exports.getAll = catchAsync(async (req, res, next) => {
  const role = await Role.find();
  res.status(200).json({
    message: 'success',
    role,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newRole = await Role.create({
    name: req.body.name,
  });
  res.status(200).json({
    message: 'success',
    newRole,
  });
});
