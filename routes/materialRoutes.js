const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

// CREATE
router.post('/', materialController.createMaterial);

// READ all
router.get('/', materialController.getAllMaterials);

// READ by name
router.get('/:name', materialController.getMaterialByName);

// UPDATE by name
router.put('/:name', materialController.updateMaterial);

// DELETE by name
router.delete('/:name', materialController.deleteMaterial);

// DELETE all
router.delete('/', materialController.deleteAllMaterials);

module.exports = router;
