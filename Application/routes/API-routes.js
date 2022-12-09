const router = require('express').Router();

router.post('/notes', (req, res) => {
    res.send('POST request to the homepage');
  })

  module.exports = router;