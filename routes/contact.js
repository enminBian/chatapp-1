const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/contact', (req, res)=>{
  res.sendFile(__dirname, '../views/contact.html');
});

module.exports = router;
