const express = require('express');
const router = express.Router();

const users = require('./users');
const topics = require('./topics');
const latest = require('./latest');
router.use('/users', users);
router.use('/topics', topics);
router.use('/latest', latest);

module.exports = router;