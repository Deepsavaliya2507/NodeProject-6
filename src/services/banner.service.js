const { Banner } = require("../models");

/**
 * Create banner
 * @param {object} reqBody
 * @returns {Promise<banner>}
 */
const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

/**
 * Get banner list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<banner>}
 */
const getBannerList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Banner.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get banner by email
 * @param {string} email
 * @returns {Promise<banner>}
 */
const getBannerByEmail = async (email) => {
  return Banner.findOne({ email });
};

/**
 * Get banner details by id
 * @param {ObjectId} bannerId
 * @returns {Promise<banner>}
 */
const getBannerById = async (bannerId) => {
  return Banner.findById(bannerId);
};

/**
 * banner details update by id
 * @param {ObjectId} bannerId
 * @param {object} updateBody
 * @returns {Promise<banner>}
 */
const updateDetails = async (bannerId, updateBody) => {
  return Banner.findByIdAndUpdate(bannerId, { $set: updateBody });
};

/**
 * Delete banner
 * @param {ObjectId} bannerId
 * @returns {Promise<banner>}
 */
const deleteBanner = async (bannerId) => {
  return Banner.findByIdAndDelete(bannerId);
};

module.exports = {
  createBanner,
  getBannerList,
  getBannerById,
  updateDetails,
  getBannerByEmail,
  deleteBanner,
};
