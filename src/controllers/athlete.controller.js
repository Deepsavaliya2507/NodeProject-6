const fs = require("fs");
const { athleteService, emailService } = require("../services");

/** create athlete */
const createAthlete = async (req, res) => {
  try {
    const reqBody = req.body;
    if (req.file) {
      reqBody.athlete_image = req.file.filename;
    } else {
      throw new Error("Product image is required!");
    }
    const athleteExists = await athleteService.getAthleteByEmail(reqBody.email);
    if (athleteExists) {
      throw new Error("athlete already created by this email!");
    }
    const athlete = await athleteService.createAthlete(reqBody);
    if (!athlete) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "athlete create successfully!",
      data: { athlete },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get athlete list */
const getAthleteList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await athleteService.getAthleteList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get athlete list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get athlete details by id */
const getAthleteDetails = async (req, res) => {
  try {
    const getDetails = await athleteService.getAthleteById(
      req.params.athleteId
    );
    if (!getDetails) {
      throw new Error("athlete not found!");
    }
    res.status(200).json({
      success: true,
      message: "athlete details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** athlete details update by id */
const updateDetails = async (req, res) => {
  try {
    const athleteId = req.params.athleteId;
    const athleteExists = await athleteService.getAthleteById(athleteId);
    if (!athleteExists) {
      throw new Error("athlete not found!");
    }
    await athleteService.updateDetails(athleteId, req.body);
    res
      .status(200)
      .json({ success: true, message: "athlete details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete athlete */
const deleteAthlete = async (req, res) => {
  try {
    const athleteId = req.params.athleteId;
    const athleteExists = await athleteService.getAthleteById(athleteId);
    if (!athleteExists) {
      throw new Error("athlete not found!");
    }
    await athleteService.deleteAthlete(athleteId);
    res.status(200).json({
      success: true,
      message: "athlete delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAthlete,
  getAthleteList,
  getAthleteDetails,
  updateDetails,
  deleteAthlete,
};
