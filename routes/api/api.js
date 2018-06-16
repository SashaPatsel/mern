const User = require("../../models/user.js")
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


module.exports = function (app) {
  app.post("/signup", function (req, res) {
    const userName = req.body.userName
    const email = req.body.email
    const password = req.body.password

    const newUser = new User({
      userName: userName,
      email: email,
      password: password

    })
console.log(User)
    // User.createUser(newUser, function(err, user) {

    //   console.log(user)
    // })

    // user.create(req.body)
  })

  
}