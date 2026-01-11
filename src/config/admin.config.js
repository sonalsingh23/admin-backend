const bcrypt = require("bcryptjs");


const ADMIN_PASSWORD = "Admin@123";

module.exports = {
  email: "admin@gmail.com",
  passwordHash: bcrypt.hashSync(ADMIN_PASSWORD, 10),
  role: "admin",
};
