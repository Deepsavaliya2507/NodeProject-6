const Joi = require("joi");

/** create season */
const createSeason = {
  body: Joi.object().keys({
    season_name: Joi.string().required().trim(),
    start_date: Joi.string().required().trim(),
    end_date: Joi.string().required().trim(),
    description: Joi.number().required().integer(),
  }),
};

/** GEt season list */
const getSeasonList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get season details by id */
const getDetails = {
  params: Joi.object().keys({
    seasonId: Joi.string().required().trim(),
  }),
};

/** season details update by id */
const updateDetails = {
  params: Joi.object().keys({
    seasonId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createSeason,
  getDetails,
  getSeasonList,
  updateDetails,
};
