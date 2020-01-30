import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation : {
        confirmSecret: async(_,args) =>{
            const {email,secret} =args;
            const user = await prisma.user({email});
            if(user.loginSecret === secret){
                //JWT Token
                return "Token"
            }else{
                throw Error("이메일과 인증코드가 잘못되었습니다.")
            }
        }
    } 
}