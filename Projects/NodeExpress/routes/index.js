const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dataFilePath = path.join(__dirname, '../data/data.txt');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/submit', (req, res) => {
  const { firstName, lastName, favoriteFood } = req.body;
  const entry = `${firstName},${lastName},${favoriteFood}\n`;
  fs.appendFile(dataFilePath, entry, (err) => {
    if (err) throw err;
    res.send('Data saved successfully! <a href="/">Go back</a>');
  });
});

router.get('/all', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    let html = '<h1>All Entries</h1><table border="1"><tr><th>First Name</th><th>Last Name</th><th>Favorite Food</th></tr>';
    const entries = data.trim().split('\n');
    entries.forEach(entry => {
      const [firstName, lastName, favoriteFood] = entry.split(',');
      html += `<tr><td>${firstName}</td><td>${lastName}</td><td>${favoriteFood}</td></tr>`;
    });
    html += '</table><a href="/">Go back</a>';
    res.send(html);
  });
});

module.exports = router;
