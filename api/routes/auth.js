const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { Strategy } = require('passport-github');

const { addUser, getUser } = require('../db/testdb');

const JWT_KEY = "something_private_and_long_enough_to_be_secure";

const router = express();
passport.use(new Strategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/github/callback"
},

  function (accessToken, refreshToken, profile, cb) {
    // find or create the user and return the profile information
    return cb(null, profile);
  }
));

rotuer.get('/github', (req, res, next) => {
  const { redirectTo } = req.query;
  const state = JSON.stringify({ redirectTo });
  const authenticator = passport.authenticate('github', { scope: [], state, session: true });
  authenticator(req, res, next);
}, (req, res, next) => {
  next();
});

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }), (req, res, next) => {
    const token = jwt.sign({ id: req.user.id }, JWT_KEY, { expiresIn: 60 * 60 * 24 * 1000 })
    req.logIn(req.user, function (err) {
      if (err) return next(err);;
      res.redirect(`http://localhost:3000?token=${token}`)
    });

  },
);
module.exports = router;