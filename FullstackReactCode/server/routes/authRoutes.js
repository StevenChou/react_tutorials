const passport = require('passport');

module.exports = app => {
  // 告訴 passport 我要使用 google strategy
  // scope ==> access to this user's profile information and email address as well
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
