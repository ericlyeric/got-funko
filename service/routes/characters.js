const express = require('express');
const router = express.Router();

let characters = require('../dummyDatabase');

router.get('/list', async (req, res) => {
  try {
    res.status(200).json({
      data: characters,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Some error occured',
      err,
    });
  }
});

module.exports = router;
