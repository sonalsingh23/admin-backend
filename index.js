const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/db");
const adminRoutes = require("./src/routes/admin.route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// routes
app.use("/api/admin", adminRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});