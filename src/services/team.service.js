const { Team } = require("../models");

/**
 * Create Team
 * @param {object} reqBody
 * @returns {Promise<Team>}
 */
const createTeam = async (reqBody) => {
  return Team.create(reqBody);
};

/**
 * Get Team list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Team>}
 */
const getTeamList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Team.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Team by email
 * @param {string} email
 * @returns {Promise<Team>}
 */
const getTeamByEmail = async (email) => {
  return Team.findOne({ email });
};

/**
 * Get Team details by id
 * @param {ObjectId} TeamId
 * @returns {Promise<Team>}
 */
const getTeamById = async (TeamId) => {
  return Team.findById(TeamId);
};

/**
 * Team details update by id
 * @param {ObjectId} TeamId
 * @param {object} updateBody
 * @returns {Promise<Team>}
 */
const updateDetails = async (TeamId, updateBody) => {
  return Team.findByIdAndUpdate(TeamId, { $set: updateBody });
};

/**
 * Delete Team
 * @param {ObjectId} TeamId
 * @returns {Promise<Team>}
 */
const deleteTeam = async (TeamId) => {
  return Team.findByIdAndDelete(TeamId);
};

module.exports = {
  createTeam,
  getTeamList,
  getTeamById,
  updateDetails,
  getTeamByEmail,
  deleteTeam,
};
