const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/portfolio', (req, res)=>{
  res.sendFile(__dirname, '/portfolio.html');
});

module.exports = router;
