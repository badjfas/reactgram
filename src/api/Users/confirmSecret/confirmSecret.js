import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation : {
        confirmSecret: async(_,args) =>{
            const {email,secret} =args;
            const user = await prisma.user({email});
            if(user.loginSecret === secret){
                //JWT Token
                const token = generateToken(user.id);
                return token;
            }else{
                throw Error("이메일과 인증코드가 잘못되었습니다.")
            }
        }
    } 
}