const LocalSpeciality = require('../models/localSpecialty');

// GET: Ambil semua local specialties dengan filter
exports.getAllLocalSpecialities = async (req, res) => {
  try {
    // Mengambil query parameter untuk filter
    const { name, source, character } = req.query;

    // Filter objek berdasarkan query parameter
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Pencarian nama yang tidak sensitif terhadap huruf besar/kecil
    }
    if (source) {
      filter.sources = { $in: [source] }; // Menyaring berdasarkan sumber
    }
    if (character) {
      filter.characters = { $in: [character] }; // Menyaring berdasarkan karakter
    }

    // Ambil data dengan filter dan populasi karakter jika perlu
    const localSpecialities = await LocalSpeciality.find(filter).populate('characters');
    
    res.status(200).json(localSpecialities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Ambil satu local specialty berdasarkan ID
exports.getLocalSpecialityById = async (req, res) => {
  try {
    const localSpeciality = await LocalSpeciality.findById(req.params.id).populate('characters');
    if (!localSpeciality) {
      return res.status(404).json({ message: 'Local Specialty not found' });
    }
    res.status(200).json(localSpeciality);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Buat local specialty baru
exports.createLocalSpeciality = async (req, res) => {
  // Membuat instance baru berdasarkan data yang dikirimkan melalui req.body
  const localSpeciality = new LocalSpeciality({
    name: req.body.name,
    iconUrl: req.body.iconUrl,
    sources: req.body.sources,
    characters: req.body.characters
  });

  try {
    const newLocalSpeciality = await localSpeciality.save();
    res.status(201).json(newLocalSpeciality);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT: Perbarui local specialty berdasarkan ID
exports.updateLocalSpeciality = async (req, res) => {
  try {
    const localSpeciality = await LocalSpeciality.findById(req.params.id);
    if (!localSpeciality) {
      return res.status(404).json({ message: 'Local Specialty not found' });
    }

    // Update field-field yang dikirimkan, jika tidak ada, gunakan value yang sudah tersimpan
    localSpeciality.name = req.body.name || localSpeciality.name;
    localSpeciality.iconUrl = req.body.iconUrl || localSpeciality.iconUrl;
    localSpeciality.sources = req.body.sources || localSpeciality.sources;
    localSpeciality.characters = req.body.characters || localSpeciality.characters;

    const updatedLocalSpeciality = await localSpeciality.save();
    res.status(200).json(updatedLocalSpeciality);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: Hapus local specialty berdasarkan ID
exports.deleteLocalSpeciality = async (req, res) => {
  try {
    const localSpeciality = await LocalSpeciality.findById(req.params.id);
    if (!localSpeciality) {
      return res.status(404).json({ message: 'Local Specialty not found' });
    }

    await localSpeciality.remove();
    res.status(200).json({ message: 'Local Specialty deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
