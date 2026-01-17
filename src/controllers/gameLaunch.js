const axios = require("axios");
const Game = require("../models/Game");
const User = require("../models/User");
const buildGamePayload = require("../utils/buildGamePayload");
const { launch24Game } = require("../services/gameLaunch.service");
// exports.launchGame = async (req, res) => {
//   try {
//     console.log("REQ AUTH:", req.auth); 

//     const { gameId } = req.params;

//     // ✅ get user
//     const user = await User.findById(req.auth.id);
//     console.log("user", user);

//     if (!user || !user.memberAccount) {
//       return res.status(400).json({ message: "Member account not created" });
//     }

//     // ✅ gameID = game_uid
//     const game = await Game.findOne({
//       gameID: gameId,
//       isActive: true
//     });

//     if (!game) {
//       return res.status(404).json({ message: "Game not available" });
//     }

//     const transferId = `txn_${Date.now()}_${user._id}`;

//     const payload = {
//       agency_uid: process.env.GAME_API_KEY,
//       member_account: user.memberAccount,
//       game_uid: game.gameID, // 🔥 FIXED HERE
//       timestamp: Date.now(),
//       credit_amount: 0,
//       currency_code: "INR",
//       language: "en",
//       platform: "web",
//       home_url: process.env.GAME_HOME_URL,
//       transfer_id: transferId
//     };

//     console.log("24GAME PAYLOAD:", payload);

//     const response = await axios.post(
//       "https://member.24gameapi.org/api/gameLaunch.php",
//       payload,
//       { timeout: 10000 }
//     );

//     return res.json({
//       success: true,
//       gameLaunchUrl: response.data.payload.game_launch_url
//     });

//   } catch (err) {
//     console.error("GAME LAUNCH ERROR:", err.response?.data || err.message);
//     res.status(500).json({ message: "Game launch failed" });
//   }
// };
//get all games
exports.getAllGames = async (req, res) => {
  try {
    console.log("📋 Fetching all games from database...");
    
    const games = await Game.find();
    
    console.log(`✅ Found ${games.length} games`);
    
    return res.status(200).json({
      success: true,
      count: games.length,
      data: games
    });
    
  } catch (error) {
    console.error("❌ Error fetching games:", error);
    
    return res.status(500).json({
      success: false,
      message: "Failed to fetch games",
      error: error.message
    });
  }
};

// exports.testLaunchGame = async (req, res) => {
//   try {
//     console.log("🧪 TEST LAUNCH GAME API CALLED");
    
//     const { gameId } = req.params;
//     console.log("📌 Game ID:", gameId);

//     // ✅ Check if game exists
//     const game = await Game.findOne({
//       gameID: gameId,
//       isActive: true
//     });

//     if (!game) {
//       console.log("❌ Game not found in database");
//       return res.status(404).json({ 
//         success: false,
//         message: "Game not available" 
//       });
//     }

//     console.log("✅ Game found:", game.gameNameEn || game.name || "Game");
//     console.log("🔍 FULL GAME OBJECT:", JSON.stringify(game, null, 2));

//     const transferId = `test_txn_${Date.now()}`;

//     const payload = {
//       agency_uid: process.env.GAME_API_KEY,
//       member_account: "hee4b2_696a01169e06d556bfb22070_075b8", // Test member account
//       game_uid: gameId, // 🔥 Direct gameId from params
//       timestamp: Date.now(),
//       credit_amount: 0,
//       currency_code: process.env.GAME_CURRENCY || "INR",
//       language: "en",
//       platform: "web",
//       home_url: process.env.GAME_HOME_URL,
//       transfer_id: transferId
//     };

//     console.log("📤 24GAME API PAYLOAD:", JSON.stringify(payload, null, 2));

//     const response = await axios.post(
//       "https://member.24gameapi.org/api/gameLaunch.php",
//       payload,
//       { 
//         timeout: 15000,
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     );

//     console.log("📥 24GAME API RESPONSE:", JSON.stringify(response.data, null, 2));

//     // Check if response is successful
//     if (response.data.code === 0 && response.data.payload?.game_launch_url) {
//       return res.status(200).json({
//         success: true,
//         message: "Game launched successfully",
//         game: {
//           name: game.gameNameEn,
//           image: game.img,
//           gameID: game.gameID
//         },
//         launchData: {
//           gameLaunchUrl: response.data.payload.game_launch_url,
//           transactionId: response.data.payload.transaction_id,
//           transferId: response.data.payload.transfer_id,
//           playerName: response.data.payload.player_name,
//           currency: response.data.payload.currency
//         }
//       });
//     } else {
//       console.log("❌ Game launch failed:", response.data);
//       return res.status(400).json({
//         success: false,
//         message: response.data.msg || "Game launch failed",
//         code: response.data.code
//       });
//     }

//   } catch (err) {
//     console.error("❌ GAME LAUNCH ERROR:", err.response?.data || err.message);
    
//     return res.status(500).json({ 
//       success: false,
//       message: "Game launch failed",
//       error: err.response?.data || err.message,
//       details: err.response?.status ? `Status: ${err.response.status}` : null
//     });
//   }
// };

// ✅ LAUNCH GAME - WITH AUTH (Main API)

exports.launchGame = async (req, res) => {
  try {
    console.log("🎮 LAUNCH GAME (AUTH)");

    // 🔐 Hard auth guard
    if (!req.auth || !req.auth.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    const { gameId } = req.params;

    // 👤 Fetch user
    const user = await User.findById(req.auth.id).lean();
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    if (!user.memberAccount) {
      return res.status(400).json({
        success: false,
        message: "Member account not created"
      });
    }

    // 🎯 Fetch game
    const game = await Game.findOne({
      gameID: gameId,
      isActive: true
    }).lean();

    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not available"
      });
    }

    // 🔁 Create transfer id
    const transferId = `txn_${Date.now()}_${user._id}`;

    // 🧱 Build vendor payload
    const payload = buildGamePayload({
      gameId: game.gameID,   // vendor game_uid
      memberAccount: user.memberAccount,
      transferId
    });

    // 🚀 Call 24Game API
    const apiResponse = await launch24Game(payload);

    if (apiResponse.code !== 0 || !apiResponse.payload?.game_launch_url) {
      return res.status(400).json({
        success: false,
        message: apiResponse.msg || "Game launch failed",
        code: apiResponse.code
      });
    }

    // ✅ Success
    return res.status(200).json({
      success: true,
      message: "Game launched successfully",
      game: {
        name: game.gameNameEn,
        image: game.img,
        gameID: game.gameID
      },
      launchData: {
        gameLaunchUrl: apiResponse.payload.game_launch_url,
        transactionId: apiResponse.payload.transaction_id,
        transferId: apiResponse.payload.transfer_id,
        playerName: apiResponse.payload.player_name,
        currency: apiResponse.payload.currency
      }
    });

  } catch (err) {
    console.error("❌ GAME LAUNCH ERROR:", err.response?.data || err.message);

    return res.status(500).json({
      success: false,
      message: "Game launch failed",
      error: err.response?.data || err.message
    });
  }
};

