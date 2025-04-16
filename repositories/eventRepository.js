const Event = require("../models/event");

const getAllEvents = () => Event.find();
const getEventByName = (name) => Event.findOne({ name });

module.exports = {
  getAllEvents,
  getEventByName
};