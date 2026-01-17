const axios = require("axios");

exports.launch24Game = async (payload) => {
  const response = await axios.post(
    "https://member.24gameapi.org/api/gameLaunch.php",
    payload,
    {
      timeout: 15000,
      headers: { "Content-Type": "application/json" }
    }
  );

  return response.data;
};
