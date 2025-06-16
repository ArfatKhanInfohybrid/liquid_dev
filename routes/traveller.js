const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('traveller', { title: 'Traveller Details' });
});

module.exports = router;
