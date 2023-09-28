const express = require("express");
const { seasonValidation } = require("../../validations");
const { seasonController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create season */
router.post(
  "/create-season",
  validate(seasonValidation.createSeason),
  seasonController.createSeason
);

/** Get season list */
router.get(
  "/list",
  validate(seasonValidation.getSeasonList),
  seasonController.getSeasonList
);

/** Get season details by id */
router.get(
  "/get-details/:seasonId",
  validate(seasonValidation.getDetails),
  seasonController.getSeasonDetails
);

/** season details update by id */
router.put(
  "/update-details/:seasonId",
  validate(seasonValidation.updateDetails),
  seasonController.updateDetails
);

/** Delete season */
router.delete(
  "/delete-season/:seasonId",
  validate(seasonValidation.getDetails),
  seasonController.deleteSeason
);

module.exports = router;