const Material = require('../models/material');

// CREATE: Tambah satu atau banyak material
exports.createMaterial = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await Material.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua material dengan filter
exports.getAllMaterials = async (req, res) => {
  try {
    // Mengambil query parameter untuk filter
    const { name, rarity, farmingDays } = req.query;

    // Filter objek berdasarkan query parameter
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Pencarian nama yang tidak sensitif terhadap huruf besar/kecil
    }
    if (rarity) {
      filter.rarity = rarity; // Menyaring berdasarkan rarity
    }
    if (farmingDays) {
      filter.farmingDays = { $in: [farmingDays] }; // Menyaring berdasarkan farmingDays
    }

    // Ambil data dengan filter
    const materials = await Material.find(filter);

    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil material berdasarkan nama
exports.getMaterialByName = async (req, res) => {
  try {
    const material = await Material.findOne({ name: req.params.name });
    if (!material) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah material berdasarkan nama
exports.updateMaterial = async (req, res) => {
  try {
    const updatedMaterial = await Material.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!updatedMaterial) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.json(updatedMaterial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus material berdasarkan nama
exports.deleteMaterial = async (req, res) => {
  try {
    const deleted = await Material.findOneAndDelete({ name: req.params.name });
    if (!deleted) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.json({ message: "Material deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua material
exports.deleteAllMaterials = async (req, res) => {
  try {
    await Material.deleteMany({});
    res.json({ message: "All materials deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
