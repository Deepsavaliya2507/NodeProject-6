const { teamService, emailService } = require("../services");

/** create team */
const createTeam = async (req, res) => {
  try {
    const reqBody = req.body;
    const teamExists = await teamService.getTeamByEmail(reqBody.email);
    if (teamExists) {
      throw new Error("team already created by this email!");
    }
    const team = await teamService.createTeam(reqBody);
    if (!team) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "team create successfully!",
      data: { team },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get team list */
const getTeamList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await teamService.getTeamList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get team list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get team details by id */
const getTeamDetails = async (req, res) => {
  try {
    const getDetails = await teamService.getTeamById(
      req.params.teamId
    );
    if (!getDetails) {
      throw new Error("team not found!");
    }
    res.status(200).json({
      success: true,
      message: "team details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** team details update by id */
const updateDetails = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("team not found!");
    }
    await teamService.updateDetails(teamId, req.body);
    res
      .status(200)
      .json({ success: true, message: "team details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete team */
const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const teamExists = await teamService.getTeamById(teamId);
    if (!teamExists) {
      throw new Error("team not found!");
    }
    await teamService.deleteTeam(teamId);
    res.status(200).json({
      success: true,
      message: "team delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTeam,
  getTeamList,
  getTeamDetails,
  updateDetails,
  deleteTeam,
};
