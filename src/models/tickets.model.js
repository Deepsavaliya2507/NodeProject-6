const mongoose = require("mongoose");
const config = require("../config/config");

const ticketSchema = new mongoose.Schema(
  {
    match_id: {
      type: String,
      trim: true,
    },
    ticket_type: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    quantity: {
      type: Number,
      trim: true,
    },
    availablility: {
      type: String,
      trim: true,
    },
    total_amount: {
      type: Number,
      trim: true,
    },
    seat_no: {
      type: Number,
      trim: true,
    },
    row_column: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Ticket = mongoose.model("tickets", ticketSchema);
module.exports = Ticket;
