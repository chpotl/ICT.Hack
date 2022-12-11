const googleTrends = require('google-trends-api');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const avg = (arr) => {
  let sum = 0;
  arr.forEach(function (item) {
    sum += item;
  });
  return sum / arr.length;
};

exports.getTagtrendIndex = catchAsync(async (req, res, next) => {
  const tagsArr = req.query.tags.split(',');
  if (!tagsArr) {
    return next(new AppError('Tags are empty', 500));
  }
  const mainIndexArr = tagsArr.map(async (tag) => {
    const result = await googleTrends.interestOverTime({ keyword: tag });
    const statArray = JSON.parse(result).default.timelineData;
    return statArray[statArray.length - 1].value[0] / 100;
  });
  const indexesArr = await Promise.all(mainIndexArr);
  const data = avg(indexesArr);
  res.status(200).json({
    message: 'success',
    data,
  });
});
