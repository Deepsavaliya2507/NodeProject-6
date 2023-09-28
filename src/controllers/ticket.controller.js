const { ticketService, emailService } = require("../services");

/** create ticket */
const createTicket = async (req, res) => {
  try {
    const reqBody = req.body;
    const ticketExists = await ticketService.getTicketByEmail(reqBody.email);
    if (ticketExists) {
      throw new Error("ticket already created by this email!");
    }
    const ticket = await ticketService.createTicket(reqBody);
    if (!ticket) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "ticket create successfully!",
      data: { ticket },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get ticket list */
const getTicketList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await ticketService.getTicketList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get ticket list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get ticket details by id */
const getTicketDetails = async (req, res) => {
  try {
    const getDetails = await ticketService.getTicketById(
      req.params.ticketId
    );
    if (!getDetails) {
      throw new Error("ticket not found!");
    }
    res.status(200).json({
      success: true,
      message: "ticket details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** ticket details update by id */
const updateDetails = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;
    const ticketExists = await ticketService.getTicketById(ticketId);
    if (!ticketExists) {
      throw new Error("ticket not found!");
    }
    await ticketService.updateDetails(ticketId, req.body);
    res
      .status(200)
      .json({ success: true, message: "ticket details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete ticket */
const deleteTicket = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;
    const ticketExists = await ticketService.getTicketById(ticketId);
    if (!ticketExists) {
      throw new Error("ticket not found!");
    }
    await ticketService.deleteTicket(ticketId);
    res.status(200).json({
      success: true,
      message: "ticket delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTicket,
  getTicketList,
  getTicketDetails,
  updateDetails,
  deleteTicket,
};
