const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs');

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  fs.readFile(path.join(__dirname, 'data', 'movies.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading movies data');
      return;
    }
    res.json(JSON.parse(data));
  });
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

