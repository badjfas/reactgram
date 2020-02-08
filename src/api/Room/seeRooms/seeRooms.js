import { prisma } from "../../../../generated/prisma-client";

export default {
    Query:{
        seeRooms : async(_,args,{request,isAuthenticated}) => {
            isAuthenticated(request);
            const {user} = request;
            console.log(user.id);
            return prisma.rooms({where:{
                    participants_some:{
                        id:user.id
                    }
                }
            });
         
        }
    }
}