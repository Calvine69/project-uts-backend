const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  imageUrl: String,
  description: String,
  durationStart: String,
  durationEnd: String,
  eligibility: String,
  rewards: [mongoose.Schema.Types.Mixed],
  createdAt: Date
});

module.exports = mongoose.model("Event", EventSchema);