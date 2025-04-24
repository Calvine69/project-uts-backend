const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// CREATE: Tambah satu atau banyak event
router.post('/', eventController.createEvent);
// READ: Ambil semua event
router.get('/', eventController.getAllEvents);
// READ: Ambil event berdasarkan ID
router.get('/:id', eventController.getEventById);
// UPDATE: Ubah data event berdasarkan ID
router.put('/:id', eventController.updateEvent);
// DELETE: Hapus event berdasarkan ID
router.delete('/:id', eventController.deleteEvent);
// DELETE ALL: Hapus semua event
router.delete('/', eventController.deleteAllEvents);

module.exports = router;
