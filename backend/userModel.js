const mongoose = require("mongoose");
const User = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  active: { type: Boolean },
  travelArray: { transport: String, destination: String, booked: Boolean },
  complaintArray: [{ dateComplaint: Number, complaint: String }],
});
const model = mongoose.model("UserData", User);
module.exports = model;
