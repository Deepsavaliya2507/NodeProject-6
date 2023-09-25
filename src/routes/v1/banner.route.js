const express = require("express");
const { bannerValidation } = require("../../validations");
const { bannerController } = require("../../controllers");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth");
const {upload }=require("../../middlewares/upload");

const router = express.Router();

/** create banner */
router.post(
  "/create-banner",
//   auth(),
  upload.single("banner_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

/** Get banner list */
router.get(
  "/list",
  validate(bannerValidation.getBannerList),
  bannerController.getBannerList
);

/** Get banner details by id */
router.get(
  "/get-details/:bannerId",
  validate(bannerValidation.getDetails),
  bannerController.getBannerDetails
);

/** banner details update by id */
router.put(
  "/update-details/:bannerId",
  validate(bannerValidation.updateDetails),
  bannerController.updateDetails
);

/** Delete banner */
router.delete(
  "/delete-banner/:bannerId",
  validate(bannerValidation.getDetails),
  bannerController.deleteBanner
);

/** Send mail */
router.post(
  "/send-mail",
  validate(bannerValidation.sendMail),
  bannerController.sendMail
);

module.exports = router;
