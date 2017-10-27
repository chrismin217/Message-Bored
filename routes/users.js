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
    console.log(req.body);
    return User.create(req.body)
      .then(newUser => {
        return res.json(newUser);
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