import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT, FULL_POST_FRAGMENT } from "../../../fragment";

export default{
    Query:{
        seeFullPost : async(_,args) =>{
            const {id} =args;
            //leagcy code
            //return  await prisma.post({id}).$fragment(FULL_POST_FRAGMENT);
            //new code(not use fragement)
            return  prisma.post({id});
        }
    }
}