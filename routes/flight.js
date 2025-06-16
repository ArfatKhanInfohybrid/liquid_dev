const express = require('express');
const router = express.Router();

router.get('/listing', (req, res) => {
  res.render('flight/listing', { title: 'Flight Listing' });
});

router.get('/traveller', (req, res) => {
  res.render('flight/traveller', { title: 'Traveller Details' });
});

router.get('/confirmation', (req, res) => {
  res.render('flight/confirmation', { title: 'Booking Confirmation' });
});

module.exports = router;
