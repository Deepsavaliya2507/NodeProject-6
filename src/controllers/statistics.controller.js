const { statisticsService, emailService } = require("../services");

/** create statistics */
const createStatistics = async (req, res) => {
  try {
    const reqBody = req.body;
    const statisticsExists = await statisticsService.getStatisticsByEmail(reqBody.email);
    if (statisticsExists) {
      throw new Error("statistics already created by this email!");
    }
    const statistics = await statisticsService.createStatistics(reqBody);
    if (!statistics) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "statistics create successfully!",
      data: { statistics },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get statistics list */
const getStatisticsList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    const getList = await statisticsService.getStatisticsList(filter, options);
    res.status(200).json({
      success: true,
      message: "Get statistics list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get statistics details by id */
const getStatisticsDetails = async (req, res) => {
  try {
    const getDetails = await statisticsService.getStatisticsById(
      req.params.statisticsId
    );
    if (!getDetails) {
      throw new Error("statistics not found!");
    }
    res.status(200).json({
      success: true,
      message: "statistics details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** statistics details update by id */
const updateDetails = async (req, res) => {
  try {
    const statisticsId = req.params.statisticsId;
    const statisticsExists = await statisticsService.getStatisticsById(statisticsId);
    if (!statisticsExists) {
      throw new Error("statistics not found!");
    }
    await statisticsService.updateDetails(statisticsId, req.body);
    res
      .status(200)
      .json({ success: true, message: "statistics details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete statistics */
const deleteStatistics = async (req, res) => {
  try {
    const statisticsId = req.params.statisticsId;
    const statisticsExists = await statisticsService.getStatisticsById(statisticsId);
    if (!statisticsExists) {
      throw new Error("statistics not found!");
    }
    await statisticsService.deleteStatistics(statisticsId);
    res.status(200).json({
      success: true,
      message: "statistics delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStatistics,
  getStatisticsList,
  getStatisticsDetails,
  updateDetails,
  deleteStatistics,
};
