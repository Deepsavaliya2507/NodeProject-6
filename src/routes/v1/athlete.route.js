const express = require("express");
const { athleteValidation } = require("../../validations");
const { athleteController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const {upload }=require("../../middlewares/upload");

const router = express.Router();

/** create athlete */
router.post(
  "/create-athlete",
  upload.single("athlete_image"),
  validate(athleteValidation.createAthlete),
  athleteController.createAthlete
);

/** Get athlete list */
router.get(
  "/list",
  validate(athleteValidation.getAthleteList),
  athleteController.getAthleteList
);

/** Get athlete details by id */
router.get(
  "/get-details/:athleteId",
  validate(athleteValidation.getDetails),
  athleteController.getAthleteDetails
);

/** athlete details update by id */
router.put(
  "/update-details/:athleteId",
  validate(athleteValidation.updateDetails),
  athleteController.updateDetails
);

/** Delete athlete */
router.delete(
  "/delete-athlete/:athleteId",
  validate(athleteValidation.getDetails),
  athleteController.deleteAthlete
);

module.exports = router;