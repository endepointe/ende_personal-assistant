const express = require('express');
const jwt = require('jsonwebtoken');
const userUtils = require('../db/psql-utils');
const JWT_KEY = "something_private_and_long_enough_to_secure";

const router = express();

router.use((req, res, next) => {
  const token = req.headers['authorization'];
  jwt.verify(token, JWT_KEY, function (err, data) {
    if (err) {
      res.status(401).send({ error: err });
    } else {
      req.user = data;
      next();
    }
  });
});

router.get('/', (req, res) => {
  user = userUtils.findById(req.user.id);
  res.send(user);
});

module.exports = router;