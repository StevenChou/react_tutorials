// Node js support common js modules ==> require
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

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

// 告訴 passport 我要使用 google strategy
// scope ==> access to this user's profile information and email address as well
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// HEROKU DEPLOYMENT Step 1
// 為了支援 HEROKU 動態產生的 PORT (5000 是在開發環境使用)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
