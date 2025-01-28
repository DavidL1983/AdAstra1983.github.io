const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  const data = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

  // Append the data to a file
  fs.appendFile('submissions.txt', data, (err) => {
    if (err) throw err;
    console.log('Data saved!');
  });

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});