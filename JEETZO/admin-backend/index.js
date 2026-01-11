const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/config/db");
const adminRoutes = require("./src/routes/admin.route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);

const startServer = async () => {
  try {
    await connectDB(); // DB first
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server startup failed");
    process.exit(1);
  }
};

startServer();
