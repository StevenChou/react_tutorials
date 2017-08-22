const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./../config/keys');

// generic register
// passport i want you to be aware that there is a new strategy available and here it is
// make use of it
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // our user has come back to our server
      // get user details, create new record in database
      console.log('## access token', accessToken);
      console.log('## refresh token', refreshToken);
      console.log('## profile', profile);
    }
  )
);