import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation : {
        createAccount : async(_,args) => {
            const {userName,email,firstName="",lastName="",bio=""}=args;
            const exists=await prisma.$exists.user({userName});
            if(exists){
                throw Error("this username is already exist");
            }
            console.log(args);
            try{
                await prisma.createUser({
                    userName,
                    email,
                    firstName,
                    lastName,
                    bio});
                    return true;
            }catch{
                return false;
            }
            }
    }
}