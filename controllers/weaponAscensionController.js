// controllers/weaponAscensionController.js
const WeaponAscension = require("../models/weaponAscension");

// CREATE: Tambah satu atau banyak ascension
exports.createWeaponAscension = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await WeaponAscension.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua ascension
exports.getAllWeaponAscensions = async (req, res) => {
  try {
    const items = await WeaponAscension.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil ascension berdasarkan name
exports.getWeaponAscensionByName = async (req, res) => {
  try {
    const item = await WeaponAscension.findOne({ name: req.params.name });
    if (!item) {
      return res.status(404).json({ error: "Weapon Ascension Material not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah ascension berdasarkan name
exports.updateWeaponAscension = async (req, res) => {
  try {
    const updated = await WeaponAscension.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Weapon Ascension Material not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus ascension berdasarkan name
exports.deleteWeaponAscension = async (req, res) => {
  try {
    const deleted = await WeaponAscension.findOneAndDelete({ name: req.params.name });
    if (!deleted) {
      return res.status(404).json({ error: "Weapon Ascension Material not found" });
    }
    res.json({ message: "Weapon Ascension Material deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua ascension
exports.deleteAllWeaponAscensions = async (req, res) => {
  try {
    await WeaponAscension.deleteMany({});
    res.json({ message: "All Weapon Ascension Materials deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};