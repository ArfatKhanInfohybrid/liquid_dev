const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');

const app = express();

// Setup Liquid engine
const engine = new Liquid();
app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'templates/pages'));
app.set('view engine', 'liquid');

// Routes
app.use('/flight', require('./routes/flight'));

// Home route
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
