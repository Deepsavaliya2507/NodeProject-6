const Joi = require("joi");

/** create athlete */
const createAthlete = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    date_of_birth: Joi.string().required().trim(),
    nationality: Joi.number().required().integer(),
    role: Joi.string().required().trim(),
    contact_information: Joi.string().required().trim(),
    join_date: Joi.string().required().trim(),
  }),
};

/** GEt athlete list */
const getAthleteList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get athlete details by id */
const getDetails = {
  params: Joi.object().keys({
    athleteId: Joi.string().required().trim(),
  }),
};

/** athlete details update by id */
const updateDetails = {
  params: Joi.object().keys({
    athleteId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createAthlete,
  getDetails,
  getAthleteList,
  updateDetails,
};
