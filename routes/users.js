const express = require('express');
const router = express.Router();

const db = require('../models');
const User = db.user;

router.route('/users')
  .get((req, res) => {
    return User.findAll({
      include : [{
        model : User
      }]
    })
    .then(data => {
      res.json(data);
      return;
    });
  })
  .post((req, res) => {
    return User.create({
      name : req.body.name
    })
      .then(data => {
        res.json(data);
        return;
      });
  });

router.route('/users/:id')
  .get((req, res) => {
    const id = req.params.id;
    return User.findById(id, {
      include : [{
        model : User
      }]
    })
      .then(data => {
        res.json(data);
        return;
      });
  });  

module.exports = router;