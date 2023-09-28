const { Statistic } = require("../models");

/**
 * Create Statistic
 * @param {object} reqBody
 * @returns {Promise<Statistic>}
 */
const createStatistic = async (reqBody) => {
  return Statistic.create(reqBody);
};

/**
 * Get Statistic list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Statistic>}
 */
const getStatisticList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Statistic.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Statistic by email
 * @param {string} email
 * @returns {Promise<Statistic>}
 */
const getStatisticByEmail = async (email) => {
  return Statistic.findOne({ email });
};

/**
 * Get Statistic details by id
 * @param {ObjectId} StatisticId
 * @returns {Promise<Statistic>}
 */
const getStatisticById = async (StatisticId) => {
  return Statistic.findById(StatisticId);
};

/**
 * Statistic details update by id
 * @param {ObjectId} StatisticId
 * @param {object} updateBody
 * @returns {Promise<Statistic>}
 */
const updateDetails = async (StatisticId, updateBody) => {
  return Statistic.findByIdAndUpdate(StatisticId, { $set: updateBody });
};

/**
 * Delete Statistic
 * @param {ObjectId} StatisticId
 * @returns {Promise<Statistic>}
 */
const deleteStatistic = async (StatisticId) => {
  return Statistic.findByIdAndDelete(StatisticId);
};

module.exports = {
  createStatistic,
  getStatisticList,
  getStatisticById,
  updateDetails,
  getStatisticByEmail,
  deleteStatistic,
};
