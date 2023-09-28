const { Athlete } = require("../models");

/**
 * Create Athlete
 * @param {object} reqBody
 * @returns {Promise<Athlete>}
 */
const createAthlete = async (reqBody) => {
  return Athlete.create(reqBody);
};

/**
 * Get Athlete list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Athlete>}
 */
const getAthleteList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Athlete.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Athlete by email
 * @param {string} email
 * @returns {Promise<Athlete>}
 */
const getAthleteByEmail = async (email) => {
  return Athlete.findOne({ email });
};

/**
 * Get Athlete details by id
 * @param {ObjectId} AthleteId
 * @returns {Promise<Athlete>}
 */
const getAthleteById = async (AthleteId) => {
  return Athlete.findById(AthleteId);
};

/**
 * Athlete details update by id
 * @param {ObjectId} AthleteId
 * @param {object} updateBody
 * @returns {Promise<Athlete>}
 */
const updateDetails = async (AthleteId, updateBody) => {
  return Athlete.findByIdAndUpdate(AthleteId, { $set: updateBody });
};

/**
 * Delete Athlete
 * @param {ObjectId} AthleteId
 * @returns {Promise<Athlete>}
 */
const deleteAthlete = async (AthleteId) => {
  return Athlete.findByIdAndDelete(AthleteId);
};

module.exports = {
  createAthlete,
  getAthleteList,
  getAthleteById,
  updateDetails,
  getAthleteByEmail,
  deleteAthlete,
};
