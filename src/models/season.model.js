const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema(
  {
    season_name: {
      type: String,
      trim: true,
    },
    start_date: {
      type: String,
      trim: true,
    },
    end_date: {
      type: String,
      trim: true,
    },
    description: {
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

const Season = mongoose.model("seasons", seasonSchema);
module.exports = Season;
