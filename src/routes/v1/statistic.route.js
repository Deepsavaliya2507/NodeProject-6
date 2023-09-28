const express = require("express");
const { statisticValidation } = require("../../validations");
const { statisticController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create statistic */
router.post(
  "/create-statistic",
  validate(statisticValidation.createStatistic),
  statisticController.createStatistics
);

/** Get statistic list */
router.get(
  "/list",
  validate(statisticValidation.getStatisticList),
  statisticController.getStatisticsList
);

/** Get statistic details by id */
router.get(
  "/get-details/:statisticId",
  validate(statisticValidation.getDetails),
  statisticController.getStatisticsDetails
);

/** statistic details update by id */
router.put(
  "/update-details/:statisticId",
  validate(statisticValidation.updateDetails),
  statisticController.updateDetails
);

/** Delete statistic */
router.delete(
  "/delete-statistic/:statisticId",
  validate(statisticValidation.getDetails),
  statisticController.deleteStatistics
);

module.exports = router;