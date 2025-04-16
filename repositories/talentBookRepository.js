const TalentBook = require("../models/talentBook");

const getAllTalentBooks = () => TalentBook.find();
const getTalentBookByName = (name) => TalentBook.findOne({ name });

module.exports = {
  getAllTalentBooks,
  getTalentBookByName
};