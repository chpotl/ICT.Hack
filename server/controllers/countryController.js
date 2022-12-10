const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Country = require('../models/countryModel');

exports.getAll = catchAsync(async (req, res, next) => {
  const country = await Country.find();
  res.status(200).json({
    message: 'success',
    country,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newCountry = await Country.create({
    name: req.body.name,
  });
  res.status(200).json({
    message: 'success',
    newCountry,
  });
});
