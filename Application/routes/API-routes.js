const router = require('express').Router();
const uuid = require('../helpers/uuid');

router.post('/notes', (req, res) => {
  const {title, text} = req.body;
  const note = {
    //uuid will create a unique ID for each saved note
    title, text, id:uuid()
  };
});


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