const service = require("../services/talentBookService");

const getAll = async (req, res) => {
  try {
    const items = await service.fetchAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getByName = async (req, res) => {
  try {
    const name = req.params.name;
    const item = await service.fetchByName(name);
    if (!item) return res.status(404).json({ message: "Talent Book not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getByName
};
