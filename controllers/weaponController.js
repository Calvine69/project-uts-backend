const Weapon = require("../models/Weapon");

// CREATE: Tambah satu atau banyak weapon
exports.createWeapon = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await Weapon.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua weapon (dengan optional filter)
exports.getAllWeapons = async (req, res) => {
  try {
    const {
      name,
      rarity,
      weaponType,
      isReleased,
      source,
      character,
      ascensionMaterial
    } = req.query;

    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }

    if (rarity) {
      filter.rarity = Number(rarity);
    }

    if (weaponType) {
      filter.weaponType = weaponType;
    }

    if (isReleased !== undefined) {
      filter.isReleased = isReleased === 'true';
    }

    if (source) {
      filter.source = { $regex: source, $options: 'i' };
    }

    if (character) {
      filter.characters = { $in: [new RegExp(character, 'i')] };
    }

    if (ascensionMaterial) {
      filter.ascensionMaterials = { $in: [new RegExp(ascensionMaterial, 'i')] };
    }

    const weapons = await Weapon.find(filter);
    res.json(weapons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil weapon berdasarkan name (exact match with case-insensitive)
exports.getWeaponByName = async (req, res) => {
  try {
    const weapon = await Weapon.findOne({
      name: { $regex: `^${req.params.name}$`, $options: 'i' }
    });
    if (!weapon) {
      return res.status(404).json({ error: "Weapon not found" });
    }
    res.json(weapon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah weapon berdasarkan name
exports.updateWeapon = async (req, res) => {
  try {
    const updatedWeapon = await Weapon.findOneAndUpdate(
      { name: { $regex: `^${req.params.name}$`, $options: 'i' } },
      req.body,
      { new: true }
    );
    if (!updatedWeapon) {
      return res.status(404).json({ error: "Weapon not found" });
    }
    res.json(updatedWeapon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus weapon berdasarkan name
exports.deleteWeapon = async (req, res) => {
  try {
    const deleted = await Weapon.findOneAndDelete({
      name: { $regex: `^${req.params.name}$`, $options: 'i' }
    });
    if (!deleted) {
      return res.status(404).json({ error: "Weapon not found" });
    }
    res.json({ message: "Weapon deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua weapon
exports.deleteAllWeapons = async (req, res) => {
  try {
    await Weapon.deleteMany({});
    res.json({ message: "All weapons deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
