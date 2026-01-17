const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/db");
const gameLaunchRoutes = require("./src/routes/gameLaunch.routes")

const adminRoutes = require("./src/routes/admin.route");
const userRoutes = require("./src/routes/user.route");
const paymentRoutes = require("./src/routes/payment.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ⭐ MUST for PayU

// routes
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/game", gameLaunchRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
