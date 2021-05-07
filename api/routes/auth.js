const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const Users = require('../db/psql-utils');

const JWT_KEY = "something_private_and_long_enough_to_be_secure";

const router = express();

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/github/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // find or create the user and return the profile information
    console.log('accesstoken: ', accessToken, 'refreshtoken: ', refreshToken, 'profile: ', profile, 'done: ', done);
    return done(null, Users.findOrCreate(profile));
  }
));

router.get('/github', (req, res, next) => {
  const { redirectTo } = req.query;
  const state = JSON.stringify({ redirectTo });
  const authenticator = passport.authenticate('github', { scope: [], state, session: true });
  authenticator(req, res, next);
}, (req, res, next) => {
  next();
});

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }), async (req, res, next) => {
    const user = await req.user;
    console.log("User: ", user.data.id);
    const token = jwt.sign({ id: user.data.id }, JWT_KEY, { expiresIn: 60 * 60 * 24 * 1000 })
    console.log('token: ', token);
    // http://www.passportjs.org/docs/oauth2-api/
    req.login(user.data.id, function (err) {
      if (err) return next(err);
      res.redirect(`http://localhost:3000`);
    });
  },
);
module.exports = router;