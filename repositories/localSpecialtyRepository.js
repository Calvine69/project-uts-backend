const LocalSpecialty = require("../models/localSpecialty");

const getAllLocalSpecialties = () => LocalSpecialty.find().populate("characters");
const getLocalSpecialtyByName = (name) => LocalSpecialty.findOne({ name }).populate("characters");

module.exports = {
  getAllLocalSpecialties,
  getLocalSpecialtyByName
};s