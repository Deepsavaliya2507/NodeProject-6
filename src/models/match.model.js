const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    date_and_time: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    home_team_name: {
      type: String,
      trim: true,
    },
    away_team_name: {
      type: String,
      trim: true,
    },
    result: {
      type: String,
      trim: true,
    },
    which_season: {
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

const Match = mongoose.model("matchs", matchSchema);
module.exports = Match;
