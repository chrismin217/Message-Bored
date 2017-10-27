const express = require('express');
const router = express.Router();
const db = require('../models');
const Topic = db.topic;

router.route(':/id')
  .get((req, res) => {
    console.log('topic by ID requested');
  });

module.exports = router;