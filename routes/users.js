const express = require('express');
const router = express.Router();

const db = require('../models');
const User = db.user;

//shows all users
router.route('/users')
  .get((req, res) => {
    return User.findAll({
      include : [{
        model : User
      }]
    })
    .then(data => {
      res.render('partials/users', { title : 'Users'});
      return;
    });
  })
  //creates and responds with a new user
  .post((req, res) => {
    return User.create({
      name : req.body.name
    })
      .then(data => {
        res.redirect();
        return;
      });
  });

//shows user and all user's messages
router.route('/users/:id')
  .get((req, res) => {
    const id = req.params.id;
    return User.findById(id, {
      include : [{
        model : User
      }]
    })
      .then(data => {
        res.render('partials/user_single', { title : 'User' });
        return;
      });
  });  

module.exports = router;