// Node js support common js modules ==> require
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


// clientID 82639608615-qqosc3hf7pfvmu3nqd3t8cnqb19ls70r.apps.googleusercontent.com
// clientSecret jstcnc3yYYBhKelIqCOlYsHm

// generic register
// passport i want you to be aware that there is a new strategy available and here it is
// make use of it
passport.use(new GoogleStrategy())


// HEROKU DEPLOYMENT Step 1
// 為了支援 HEROKU 動態產生的 PORT (5000 是在開發環境使用)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
