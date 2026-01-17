module.exports = function buildGamePayload({
  gameId,
  memberAccount,
  transferId
}) {
  return {
    agency_uid: process.env.GAME_API_KEY,
    member_account: memberAccount,
    game_uid: gameId,
    timestamp: Date.now(),
    credit_amount: 0,
    currency_code: process.env.GAME_CURRENCY || "INR",
    language: "en",
    platform: "web",
    home_url: process.env.GAME_HOME_URL,
    transfer_id: transferId
  };
};
