const express = require('express');
const router = express.Router();
const db = require('../models');

router.route('/')
  .get((req, res) => {
    console.log('latest 10 posts requested');
  });

module.exports = router;