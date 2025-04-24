const Character = require('../models/Character');

// CREATE: Tambah satu atau banyak karakter
exports.createCharacter = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await Character.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua karakter atau berdasarkan parameter tertentu
exports.getAllCharacters = async (req, res) => {
  try {
    const { name, element, weaponType, gender } = req.query;  // Mendapatkan query parameter lainnya

    let query = {};  // Inisialisasi query filter kosong

    if (name) {
      query.name = { $regex: name, $options: 'i' }; // Pencarian berdasarkan nama (case-insensitive)
    }
    if (element) {
      query.element = { $regex: element, $options: 'i' }; // Pencarian berdasarkan element
    }
    if (weaponType) {
      query.weaponType = { $regex: weaponType, $options: 'i' }; // Pencarian berdasarkan weaponType
    }
    if (gender) {
      query.gender = { $regex: gender, $options: 'i' }; // Pencarian berdasarkan gender
    }

    const characters = await Character.find(query); // Pencarian karakter berdasarkan query yang dibuat

    res.json(characters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil karakter berdasarkan ID
exports.getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json(character);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah data karakter berdasarkan ID
exports.updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCharacter) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json(updatedCharacter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus karakter berdasarkan ID
exports.deleteCharacter = async (req, res) => {
  try {
    const deleted = await Character.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json({ message: 'Character deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua karakter
exports.deleteAllCharacters = async (req, res) => {
  try {
    await Character.deleteMany({});
    res.json({ message: 'All characters deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
