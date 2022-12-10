const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllProjects = catchAsync(async (req, res, next) => {
  res.status(200).json({
    msg: 'hi',
  });
});
