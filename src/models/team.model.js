const mongoose = require("mongoose");
const config=require('../config/config');

const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      trim: true,
    },
    team_logo: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    coach_name: {
      type: String,
      trim: true,
    },
    contact_information: {
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
    toJSON: {
      transform: function (doc, data) {
          if (data?.team_image) {
          data.team_image = `${config.base_url}team_image/${data.team_image}`;
          }
      },
  },
  }
);

const Team = mongoose.model("teams", teamSchema);
module.exports = Team;
