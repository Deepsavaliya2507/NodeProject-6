const mongoose = require("mongoose");
const config=require('../config/config');

const athleteSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    date_of_birth: {
      type: String,
      trim: true,
    },
    nationality: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    contact_information: {
      type: String,
      trim: true,
    },
    join_date: {
        type: String,
        trim: true,
    },
    team: {
      
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
          if (data?.athlete_image) {
          data.athlete_image = `${config.base_url}athlete_image/${data.athlete_image}`;
          }
      },
  },
  }
);

const Athlete = mongoose.model("athletes", athleteSchema);
module.exports = Athlete;
