const express = require('express');
const jwt = require('jsonwebtoken');
const { findOrCreate } = require('../db/testdb');
const router = express();

router.use((req, res, next) => {
  const token = req.headers['authorization'];
  jwt.verify(token, jwtKey, function (err, data) {
    if (err) {
      res.status(401).send({ error: err });
    } else {
      req.user = data;
      next();
    }
  });
});

router.get('/', (req, res) => {
  user = findById(req.user.id);
  res.send(user);
});

module.exports = router;