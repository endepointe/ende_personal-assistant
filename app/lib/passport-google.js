const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

export const googleStrategy = () => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback'
  },
    function (accessToken, refreshToken, profile, done) {
      console.log('in google oauth config: (profile)\n', profile)
      return done(err, null);
    }
  ));
}