const moment = require("moment");
const Memes = require("../models/meme");
const { getShortMonthAndDayNumFromDateString } = require("../utils/helper");

const getUploadStatistics = async (req, res) => {
  const sevenDaysAgoDate = moment().subtract(7, "days").toDate();

  const statsData = await Memes.aggregate([
    {
      $match: {
        createdAt: { $gte: sevenDaysAgoDate }
      }
    },
    {
      $addFields: {
        uploadDate: {
          $dateToString: {
            date: "$createdAt",
            format: "%d-%m-%Y",
          }
        }
      }
    },
    {
      $group: {
        _id: "$uploadDate",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    },
  ]);

  const formattedData = statsData.map((dataInfo) => ({ name: getShortMonthAndDayNumFromDateString(dataInfo._id), count: dataInfo.count }));
  return res.json({ success: true, statsData: formattedData });
};

module.exports = { getUploadStatistics };