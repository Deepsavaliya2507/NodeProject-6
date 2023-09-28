const express = require("express");
const { teamValidation } = require("../../validations");
const { teamController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const {upload }=require("../../middlewares/upload");

const router = express.Router();

/** create team */
router.post(
  "/create-team",
  upload.single("team_image"),
  validate(teamValidation.createTeam),
  teamController.createTeam
);

/** Get team list */
router.get(
  "/list",
  validate(teamValidation.getTeamList),
  teamController.getTeamList
);

/** Get team details by id */
router.get(
  "/get-details/:teamId",
  validate(teamValidation.getDetails),
  teamController.getTeamDetails
);

/** team details update by id */
router.put(
  "/update-details/:teamId",
  validate(teamValidation.updateDetails),
  teamController.updateDetails
);

/** Delete team */
router.delete(
  "/delete-team/:teamId",
  validate(teamValidation.getDetails),
  teamController.deleteTeam
);

module.exports = router;