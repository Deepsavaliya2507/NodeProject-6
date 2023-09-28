const { Ticket } = require("../models");

/**
 * Create Ticket
 * @param {object} reqBody
 * @returns {Promise<Ticket>}
 */
const createTicket = async (reqBody) => {
  return Ticket.create(reqBody);
};

/**
 * Get Ticket list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Ticket>}
 */
const getTicketList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Ticket.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Ticket by email
 * @param {string} email
 * @returns {Promise<Ticket>}
 */
const getTicketByEmail = async (email) => {
  return Ticket.findOne({ email });
};

/**
 * Get Ticket details by id
 * @param {ObjectId} TicketId
 * @returns {Promise<Ticket>}
 */
const getTicketById = async (TicketId) => {
  return Ticket.findById(TicketId);
};

/**
 * Ticket details update by id
 * @param {ObjectId} TicketId
 * @param {object} updateBody
 * @returns {Promise<Ticket>}
 */
const updateDetails = async (TicketId, updateBody) => {
  return Ticket.findByIdAndUpdate(TicketId, { $set: updateBody });
};

/**
 * Delete Ticket
 * @param {ObjectId} TicketId
 * @returns {Promise<Ticket>}
 */
const deleteTicket = async (TicketId) => {
  return Ticket.findByIdAndDelete(TicketId);
};

module.exports = {
  createTicket,
  getTicketList,
  getTicketById,
  updateDetails,
  getTicketByEmail,
  deleteTicket,
};
