const router = require('express').Router();
const uuid = require('../helpers/uuid');
// const db = require('../db/db.json');
const fs = require('fs');
// const path = require('path');

router.post('/notes', (req, res) => {
  const {title, text} = req.body;
  const newNote = {
    //uuid will create a unique ID for each saved note
    title, text, id:uuid()
  };
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      parsedNotes = JSON.parse(data);
      parsedNotes.push(newNote);
  
      const fileWriter = fs.writeFile(
      'db/db.json', JSON.stringify(parsedNotes),
      (writeErr) =>
        writeErr
        ? console.error(writeErr)
        : console.info('Successfully updated notes!')
      );

    // res.json(fileWriter);

        }
      }
    )
  }
);


router.delete('/notes/:id', (req, res) => {
  const notesIndex = getIndexById(req.params.id, notes);
  if(notesIndex !== -1) {
    notes.splice(notesIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

  module.exports = router;