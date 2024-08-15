const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dataFilePath = path.join(__dirname, '../data/data.txt');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/food.html'));
});

router.post('/search', (req, res) => {
  const { food } = req.body;
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    let html = `<h1>Entries with Favorite Food: ${food}</h1><table border="1"><tr><th>First Name</th><th>Last Name</th><th>Favorite Food</th></tr>`;
    const entries = data.trim().split('\n');
    entries.forEach(entry => {
      const [firstName, lastName, favoriteFood] = entry.split(',');
      if (favoriteFood.toLowerCase() === food) {
        html += `<tr><td>${firstName}</td><td>${lastName}</td><td>${favoriteFood}</td></tr>`;
      }
    });
    html += '</table><a href="/">Go back</a>';
    res.send(html);
  });
});

module.exports = router;
