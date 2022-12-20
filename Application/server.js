const express = require('express');
const path = require('path');
const APIroutes = require('./routes/API-routes');
const uuid = require('./helpers/uuid');

const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', APIroutes);

app.get('/', (req, res) => res.send('Navigate to /notes or /routes'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
