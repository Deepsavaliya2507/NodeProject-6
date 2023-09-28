const Joi = require("joi");

/** create ticket */
const createTicket = {
  body: Joi.object().keys({
    ticket_type: Joi.string().required().trim(),
    price: Joi.number().required().integer(),
    quantity: Joi.number().required().integer(),
    availablility: Joi.number().required().integer(),
    total_amount: Joi.number().required().integer(),
    seat_no: Joi.number().required().integer(),
    row_column: Joi.string().required().trim(),
  }),
};

/** GEt ticket list */
const getTicketList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get ticket details by id */
const getDetails = {
  params: Joi.object().keys({
    ticketId: Joi.string().required().trim(),
  }),
};

/** ticket details update by id */
const updateDetails = {
  params: Joi.object().keys({
    ticketId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createTicket,
  getDetails,
  getTicketList,
  updateDetails,
};
