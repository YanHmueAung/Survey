const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = mongoose.model('users');
//Serialize user to chang done function into the cookie session
passport.serializeUser((user, done) => {
    done(null, user.id);
    //So here is from the database collection
});
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});
//Google passport Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile.id);
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                //we have a user with given id
                return done(null, existingUser)
            }
            //we dont have with that user id
            const user = await new User({ googleId: profile.id }).save()
            return done(null, user);
        }
    )
);