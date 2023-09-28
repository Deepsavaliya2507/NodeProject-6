const { seasonService, emailService } = require("../services");

/** create season */
const createSeason = async (req, res) => {
  try {
    const reqBody = req.body;
    const seasonExists = await seasonService.getSeasonByEmail(reqBody.email);
    if (seasonExists) {
      throw new Error("season already created by this email!");
    }
    const season = await seasonService.createSeason(reqBody);
    if (!season) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "season create successfully!",
      data: { season },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get season list */
const getSeasonList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await seasonService.getSeasonList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get season list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get season details by id */
const getSeasonDetails = async (req, res) => {
  try {
    const getDetails = await seasonService.getSeasonById(
      req.params.seasonId
    );
    if (!getDetails) {
      throw new Error("season not found!");
    }
    res.status(200).json({
      success: true,
      message: "season details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** season details update by id */
const updateDetails = async (req, res) => {
  try {
    const seasonId = req.params.seasonId;
    const seasonExists = await seasonService.getSeasonById(seasonId);
    if (!seasonExists) {
      throw new Error("season not found!");
    }
    await seasonService.updateDetails(seasonId, req.body);
    res
      .status(200)
      .json({ success: true, message: "season details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete season */
const deleteSeason = async (req, res) => {
  try {
    const seasonId = req.params.seasonId;
    const seasonExists = await seasonService.getSeasonById(seasonId);
    if (!seasonExists) {
      throw new Error("season not found!");
    }
    await seasonService.deleteSeason(seasonId);
    res.status(200).json({
      success: true,
      message: "season delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSeason,
  getSeasonList,
  getSeasonDetails,
  updateDetails,
  deleteSeason,
};
