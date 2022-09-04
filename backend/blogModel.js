const mongoose = require("mongoose");
const UserBlog = new mongoose.Schema({
  complaint: { type: String, required: true },
});
const modelBlog = mongoose.model("UserBlog", UserBlog);
module.exports = modelBlog;
