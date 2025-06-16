const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('listing', { title: 'Listing Page' });
});

module.exports = router;
