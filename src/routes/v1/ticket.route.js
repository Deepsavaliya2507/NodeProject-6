const express = require("express");
const { ticketValidation } = require("../../validations");
const { ticketController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create ticket */
router.post(
  "/create-ticket",
  validate(ticketValidation.createTicket),
  ticketController.createTicket
);

/** Get ticket list */
router.get(
  "/list",
  validate(ticketValidation.getTicketList),
  ticketController.getTicketList
);

/** Get ticket details by id */
router.get(
  "/get-details/:ticketId",
  validate(ticketValidation.getDetails),
  ticketController.getTicketDetails
);

/** ticket details update by id */
router.put(
  "/update-details/:ticketId",
  validate(ticketValidation.updateDetails),
  ticketController.updateDetails
);

/** Delete ticket */
router.delete(
  "/delete-ticket/:ticketId",
  validate(ticketValidation.getDetails),
  ticketController.deleteTicket
);

module.exports = router;