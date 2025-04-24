// controllers/talentMaterialController.js

const TalentMaterial = require("../models/talentMaterial");

// CREATE: Tambah satu atau banyak talent material
exports.createTalentMaterial = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await TalentMaterial.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua talent materials
exports.getAllTalentMaterials = async (req, res) => {
  try {
    const materials = await TalentMaterial.find().populate("characters");
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil talent material berdasarkan name
exports.getByName = async (req, res) => {
  try {
    const material = await TalentMaterial.findOne({ name: req.params.name }).populate("characters");
    if (!material) {
      return res.status(404).json({ error: "Talent material not found" });
    }
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah talent material berdasarkan name
exports.updateTalentMaterial = async (req, res) => {
  try {
    const updated = await TalentMaterial.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Talent material not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus talent material berdasarkan name
exports.deleteTalentMaterial = async (req, res) => {
  try {
    const deleted = await TalentMaterial.findOneAndDelete({ name: req.params.name });
    if (!deleted) {
      return res.status(404).json({ error: "Talent material not found" });
    }
    res.json({ message: "Talent material deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua talent material
exports.deleteAllTalentMaterials = async (req, res) => {
  try {
    await TalentMaterial.deleteMany({});
    res.json({ message: "All talent materials deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
