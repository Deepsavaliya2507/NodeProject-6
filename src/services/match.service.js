const { Match } = require("../models");

/**
 * Create match
 * @param {object} reqBody
 * @returns {Promise<Match>}
 */
const createMatch = async (reqBody) => {
  return Match.create(reqBody);
};

/**
 * Get match list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Match>}
 */
const getMatchList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Match.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get match by email
 * @param {string} email
 * @returns {Promise<match>}
 */
const getMatchByEmail = async (email) => {
  return Match.findOne({ email });
};

/**
 * Get match details by id
 * @param {ObjectId} matchId
 * @returns {Promise<match>}
 */
const getMatchById = async (matchId) => {
  return Match.findById(matchId);
};

/**
 * match details update by id
 * @param {ObjectId} matchId
 * @param {object} updateBody
 * @returns {Promise<match>}
 */
const updateDetails = async (matchId, updateBody) => {
  return Match.findByIdAndUpdate(matchId, { $set: updateBody });
};

/**
 * Delete match
 * @param {ObjectId} matchId
 * @returns {Promise<match>}
 */
const deleteMatch = async (matchId) => {
  return Match.findByIdAndDelete(matchId);
};

module.exports = {
  createMatch,
  getMatchList,
  getMatchById,
  updateDetails,
  getMatchByEmail,
  deleteMatch,
};
