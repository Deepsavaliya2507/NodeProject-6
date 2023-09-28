const { matchService, emailService } = require("../services");

/** create match */
const createMatch = async (req, res) => {
  try {
    const reqBody = req.body;
    const matchExists = await matchService.getMatchByEmail(reqBody.email);
    if (matchExists) {
      throw new Error("match already created by this email!");
    }
    const match = await matchService.createMatch(reqBody);
    if (!match) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "match create successfully!",
      data: { match },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get match list */
const getMatchList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await matchService.getMatchList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get match list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get match details by id */
const getMatchDetails = async (req, res) => {
  try {
    const getDetails = await matchService.getMatchById(
      req.params.matchId
    );
    if (!getDetails) {
      throw new Error("match not found!");
    }
    res.status(200).json({
      success: true,
      message: "match details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** match details update by id */
const updateDetails = async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const matchExists = await matchService.getMatchById(matchId);
    if (!matchExists) {
      throw new Error("match not found!");
    }
    await matchService.updateDetails(matchId, req.body);
    res
      .status(200)
      .json({ success: true, message: "match details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete match */
const deleteMatch = async (req, res) => {
  try {
    const matchId = req.params.matchId;
    const matchExists = await matchService.getMatchById(matchId);
    if (!matchExists) {
      throw new Error("match not found!");
    }
    await matchService.deleteMatch(matchId);
    res.status(200).json({
      success: true,
      message: "match delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMatch,
  getMatchList,
  getMatchDetails,
  updateDetails,
  deleteMatch,
};
