const User = require("backend/models/userModel");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

//added now
const passport = require("passport");
const User = require("./models/userModels");
const LocalStrategy = require("passport-local").Strategy;

// Configure Passport strategies and serialization/deserialization here


// Configure Passport strategies and serialization/deserialization here



module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};
