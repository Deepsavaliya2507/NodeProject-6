const Joi = require("joi");

/** create statistic */
const createStatistic = {
  body: Joi.object().keys({
    stats: Joi.string().required().trim(),
  }),
};

/** GEt statistic list */
const getStatisticList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get statistic details by id */
const getDetails = {
  params: Joi.object().keys({
    statisticId: Joi.string().required().trim(),
  }),
};

/** statistic details update by id */
const updateDetails = {
  params: Joi.object().keys({
    statisticId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createStatistic,
  getDetails,
  getStatisticList,
  updateDetails,
};
