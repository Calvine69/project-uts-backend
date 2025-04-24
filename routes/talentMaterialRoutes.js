const express = require('express');
const router = express.Router();
const talentMaterialController = require('../controllers/talentMaterialController');

// CREATE: Tambah satu atau banyak talent materials
router.post('/', talentMaterialController.createTalentMaterial);

// READ: Ambil semua talent materials
router.get('/', talentMaterialController.getAllTalentMaterials);

// READ: Ambil berdasarkan name
router.get('/:name', talentMaterialController.getByName);

// UPDATE: Ubah berdasarkan name
router.put('/:name', talentMaterialController.updateTalentMaterial);

// DELETE: Hapus berdasarkan name
router.delete('/:name', talentMaterialController.deleteTalentMaterial);

// DELETE ALL: Hapus semua talent materials
router.delete('/', talentMaterialController.deleteAllTalentMaterials);

module.exports = router;
