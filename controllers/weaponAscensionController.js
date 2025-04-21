const service = require("../services/weaponAscensionService");

// GET ALL: Ambil semua weapon ascension
const getAll = async (req, res) => {
  try {
    const items = await service.fetchAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BY NAME: Ambil satu berdasarkan name
const getByName = async (req, res) => {
  try {
    const name = req.params.name;
    const item = await service.fetchByName(name);
    if (!item) return res.status(404).json({ message: "Weapon Ascension Material not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE: Tambah satu atau banyak
const create = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const createdItems = await service.createMany(data);
    res.status(201).json(createdItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE: Ubah berdasarkan name
const update = async (req, res) => {
  try {
    const name = req.params.name;
    const updated = await service.updateByName(name, req.body);
    if (!updated) return res.status(404).json({ message: "Weapon Ascension Material not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE: Hapus berdasarkan name
const remove = async (req, res) => {
  try {
    const name = req.params.name;
    const deleted = await service.deleteByName(name);
    if (!deleted) return res.status(404).json({ message: "Weapon Ascension Material not found" });
    res.json({ message: "Weapon Ascension Material deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE ALL: Hapus semua
const removeAll = async (req, res) => {
  try {
    await service.deleteAll();
    res.json({ message: "All Weapon Ascension Materials deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getByName,
  create,
  update,
  remove,
  removeAll
};
