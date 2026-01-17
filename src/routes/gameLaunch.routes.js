const express = require("express");
const router = express.Router();

const gameLaunchController = require("../controllers/gameLaunch");
const auth = require("../middleware/auth.middleware");

// router.post(
//   "/test-launch/:gameId",
//   gameLaunchController.testLaunchGame  // 👈 Ye controller use karo
// );
// with auth
router.post(
  "/launch/:gameId",
  auth,
  gameLaunchController.launchGame  
);
router.get("/games", gameLaunchController.getAllGames);
module.exports = router;
