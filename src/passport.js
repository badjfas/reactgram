import dotenv from "dotenv"
dotenv.config({path:path.resolve(__dirname,".env")});
import path from "path"

import passport from "passport";
import JwtStrategy from "passport-jwt";

const options ={
    jwtFromRequest:JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET
};

const verifyUser = (jwt_payload, done) =>
    {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
    }

passport.use(new JwtStrategy(options,verifyUser))