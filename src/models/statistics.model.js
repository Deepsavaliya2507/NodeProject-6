const mongoose = require("mongoose");

const satatisticSchema = new mongoose.Schema(
  {
    match_id: {
      type: String,
      trim: true,
    },
    athlete_id: {
      type: String,
      trim: true,
    },
    team_id: {
      type: String,
      trim: true,
    },
    stats: {
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

const Satatistic = mongoose.model("satatistics", satatisticSchema);
module.exports = Satatistic;
