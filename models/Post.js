// Imports
const mongoose = require("mongoose");
// Schema
const PostSchema = new mongoose.Schema({
  message: { type: String, required: [true, "Message is required"] },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
// Export module
module.exports = mongoose.model("Post", PostSchema);
