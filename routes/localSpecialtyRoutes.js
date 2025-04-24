const express = require('express');
const router = express.Router();
const localSpecialityController = require('../controllers/localSpecialtyController');

// GET: Ambil semua local specialties
router.get('/', localSpecialityController.getAllLocalSpecialities);

// GET: Ambil local specialty berdasarkan ID
router.get('/:id', localSpecialityController.getLocalSpecialityById);

// POST: Buat local specialty baru
router.post('/', localSpecialityController.createLocalSpeciality);

// PUT: Perbarui local specialty berdasarkan ID
router.put('/:id', localSpecialityController.updateLocalSpeciality);

// DELETE: Hapus local specialty berdasarkan ID
router.delete('/:id', localSpecialityController.deleteLocalSpeciality);

module.exports = router;
