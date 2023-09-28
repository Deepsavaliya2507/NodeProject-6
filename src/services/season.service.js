const { Season } = require("../models");

/**
 * Create Season
 * @param {object} reqBody
 * @returns {Promise<Season>}
 */
const createSeason = async (reqBody) => {
  return Season.create(reqBody);
};

/**
 * Get Season list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Season>}
 */
const getSeasonList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Season.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Season by email
 * @param {string} email
 * @returns {Promise<Season>}
 */
const getSeasonByEmail = async (email) => {
  return Season.findOne({ email });
};

/**
 * Get Season details by id
 * @param {ObjectId} SeasonId
 * @returns {Promise<Season>}
 */
const getSeasonById = async (SeasonId) => {
  return Season.findById(SeasonId);
};

/**
 * Season details update by id
 * @param {ObjectId} SeasonId
 * @param {object} updateBody
 * @returns {Promise<Season>}
 */
const updateDetails = async (SeasonId, updateBody) => {
  return Season.findByIdAndUpdate(SeasonId, { $set: updateBody });
};

/**
 * Delete Season
 * @param {ObjectId} SeasonId
 * @returns {Promise<Season>}
 */
const deleteSeason = async (SeasonId) => {
  return Season.findByIdAndDelete(SeasonId);
};

module.exports = {
  createSeason,
  getSeasonList,
  getSeasonById,
  updateDetails,
  getSeasonByEmail,
  deleteSeason,
};
