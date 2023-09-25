const fs = require("fs");
const { bannerService, emailService } = require("../services");

/** create banner */
const createBanner = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.banner_image  = req.file.filename;
    } else {
      throw new Error("Product image is required!");
    }

    const bannerExists = await bannerService.getBannerByEmail(reqBody.email);
    if (bannerExists) {
      throw new Error("banner already created by this email!");
    }

    const banner = await bannerService.createBanner(reqBody);
    if (!banner) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "banner create successfully!",
      data: { banner },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get banner list */
const getBannerList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await bannerService.getBannerList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get banner list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get banner details by id */
const getBannerDetails = async (req, res) => {
  try {
    const getDetails = await bannerService.getBannerById(req.params.bannerId);
    if (!getDetails) {
      throw new Error("banner not found!");
    }

    res.status(200).json({
      success: true,
      message: "banner details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** banner details update by id */
const updateDetails = async (req, res) => {
  try {
    const bannerId = req.params.bannerId;
    const bannerExists = await bannerService.getBannerById(bannerId);
    if (!bannerExists) {
      throw new Error("banner not found!");
    }

    await bannerService.updateDetails(bannerId, req.body);

    res
      .status(200)
      .json({ success: true, message: "banner details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete banner */
const deleteBanner = async (req, res) => {
  try {
    const bannerId = req.params.bannerId;
    const bannerExists = await bannerService.getBannerById(bannerId);
    if (!bannerExists) {
      throw new Error("banner not found!");
    }

    await bannerService.deleteBanner(bannerId);

    res.status(200).json({
      success: true,
      message: "banner delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBanner,
  getBannerList,
  getBannerDetails,
  updateDetails,
  deleteBanner,
  sendMail,
};
