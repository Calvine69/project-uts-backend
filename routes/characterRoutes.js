const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.post('/', characterController.createCharacter);
router.get('/', characterController.getAllCharacters);
router.get('/:id', characterController.getCharacterById);
router.put('/:id', characterController.updateCharacter);
router.delete('/:id', characterController.deleteCharacter);

// Ini route untuk hapus semua
router.delete('/', characterController.deleteAllCharacters);

module.exports = router;
