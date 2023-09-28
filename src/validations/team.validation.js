const Joi = require("joi");

/** create team */
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().required().trim(),
    team_logo: Joi.string().allow,
    location: Joi.string().required().trim(),
    coach_name: Joi.number().required().integer(),
    contact_information: Joi.string().required().trim(),
  }),
};

/** GEt team list */
const getTeamList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get team details by id */
const getDetails = {
  params: Joi.object().keys({
    teamId: Joi.string().required().trim(),
  }),
};

/** team details update by id */
const updateDetails = {
  params: Joi.object().keys({
    teamId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createTeam,
  getDetails,
  getTeamList,
  updateDetails,
};
