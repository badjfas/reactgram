import dotenv from "dotenv"
dotenv.config({path:path.resolve(__dirname,".env")});
import path from "path"
import prisma from "prisma-client-lib"
import passport from "passport";
import {Strategy,ExtractJwt} from "passport-jwt";

const options ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET
};

const verifyUser = async (jwt_payload,done) =>
    {
        try{
            const user = await prisma.user({id:payload}) 
            if(user !== null){
                return done(null,user);
            }else{
                return done(null,false);
            }
        }catch(error){
            return done(error,false);
        }
    };

export const authenticateJwt = (req,res,next) => passport.authenticate("jwt",{session:false},(error,user)=>{
    if(user){
        req.user = user;
        console.log(user,"여기");
    }
    next();
})(req,res,next);

passport.use(new Strategy(options, verifyUser));
passport.initialize();