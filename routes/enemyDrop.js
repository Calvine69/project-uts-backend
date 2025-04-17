const express = require('express');
const router = express.Router();

// Your route definition
router.get('/enemy-drop', (req, res) => {
  res.json({ message: 'Enemy drop data' });
});

module.exports = router;
