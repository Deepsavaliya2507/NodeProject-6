const Joi = require("joi");

/** create match */
const createMatch = {
  body: Joi.object().keys({
    date_and_time: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    home_team_name: Joi.string().required().trim(),
    away_team_name: Joi.number().required().integer(),
    result: Joi.string().required().trim(),
    which_season: Joi.string().required().trim(),
  }),
};

/** GEt match list */
const getMatchList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get match details by id */
const getDetails = {
  params: Joi.object().keys({
    matchId: Joi.string().required().trim(),
  }),
};

/** match details update by id */
const updateDetails = {
  params: Joi.object().keys({
    matchId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createMatch,
  getDetails,
  getMatchList,
  updateDetails,
};
