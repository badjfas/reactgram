import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        seeProfile: async(_,args,{request}) =>{
            const { id } = args;
            const user = await prisma.user({id});     
            const posts =await prisma.user({id}).posts();
            return {user,posts};
        }
    }
}