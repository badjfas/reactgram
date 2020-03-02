import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        seeProfile: async(_,args,{request}) =>{
            const { userName } = args;
            return prisma.user({userName});
        }
    }
}