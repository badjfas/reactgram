import "./env"
import  {GraphQLServer}  from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import {prisma} from "../generated/prisma-client";
import {authenticateJwt} from "./passport";
import passport from "passport"

const PORT = process.env.PORT || 4000;


const server = new GraphQLServer({schema,context:({request})=>({request})
});

server.express.use(logger("dev"));

server.express.use(authenticateJwt);

server.start({port:PORT},()=> console.log(`server running on port ${PORT}`));

