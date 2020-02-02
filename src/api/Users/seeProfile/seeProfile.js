import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        seeProfile: async(_,args,{request}) =>{
            const { id } = args;
            return prisma.user({id})
        }
    }
}