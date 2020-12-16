// Imports
const mongoose = require("mongoose");
// Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  password: { type: String, required: [true, "Password is required"] },
});
// Export module
module.exports = mongoose.model("User", UserSchema);
