const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

const { addUser, getUser, findOrCreate, findById } = require('../db/testdb');
const user1 = { id: 1369, fname: 'ende', lname: 'pointe' };
const user2 = { id: 2468, fname: 'pointe', lname: 'ende' };
const user3 = { id: 1472, fname: 'ftest', lname: 'ltest' };
addUser(user1)
addUser(user2)
console.log(findById(user2))
console.log(findById(user3)) // should return -1
addUser(user3)
console.log(findById(user3))
const JWT_KEY = "something_private_and_long_enough_to_be_secure";

const router = express();
passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/github/callback"
},

  function (accessToken, refreshToken, profile, cb) {
    // find or create the user and return the profile information
    return cb(null, findOrCreate(profile));
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
  passport.authenticate('github', { failureRedirect: '/login' }), (req, res, next) => {
    console.log(res);
    const token = jwt.sign({ id: req.user.id }, JWT_KEY, { expiresIn: 60 * 60 * 24 * 1000 })
    req.logIn(req.user, function (err) {
      if (err) return next(err);;
      res.redirect(`http://localhost:3000?token=${token}`)
    });

  },
);
module.exports = router;