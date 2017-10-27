const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.user;

router.route('/')
  .get((req, res) => {
    return User.findAll()
    .then(users => {
      return res.json(users);
    });
  })
  .post((req, res) => {
    return User.create(req.body)
      .then(user => {
        return res.json(user);
      });
  });

router.route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    return User.findById(id)
      .then(user => {
        return res.json(user);
      });
  });  

module.exports = router;