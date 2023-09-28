const express = require("express");
const { matchValidation } = require("../../validations");
const { matchController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create match */
router.post(
  "/create-match",
  validate(matchValidation.createMatch),
  matchController.createMatch
);

/** Get match list */
router.get(
  "/list",
  validate(matchValidation.getMatchList),
  matchController.getMatchList
);

/** Get match details by id */
router.get(
  "/get-details/:matchId",
  validate(matchValidation.getDetails),
  matchController.getMatchDetails
);

/** match details update by id */
router.put(
  "/update-details/:matchId",
  validate(matchValidation.updateDetails),
  matchController.updateDetails
);

/** Delete match */
router.delete(
  "/delete-match/:matchId",
  validate(matchValidation.getDetails),
  matchController.deleteMatch
);

module.exports = router;