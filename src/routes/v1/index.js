const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const bannerRoute = require("./banner.route");
const athleteRoute = require("./athlete.route");
const teamRoute = require("./team.route");
const seasonRoute = require("./season.route");
const matchRoute = require("./match.route");
const statisticRoute = require("./statistic.route");
const ticketRoute = require("./ticket.route");

const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/banner", bannerRoute);
router.use("/athlete", athleteRoute);
router.use("/team", teamRoute);
router.use("/season", seasonRoute);
router.use("/match", matchRoute);
router.use("/statistic", statisticRoute);
router.use("/ticket", ticketRoute);

module.exports = router;