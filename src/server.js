import "./env"
import  {GraphQLServer}  from "graphql-yoga";
import {prisma} from "../generated/prisma-client";
import logger from "morgan";
import schema from "./schema";
import {authenticateJwt} from "./passport";
import { isAuthenticated } from "./middlewares";
import upload, { uploadMiddleware, uploadController } from "./upload";

const PORT = process.env.PORT || 4000;


const server = new GraphQLServer({
    schema,
    context: ({ request }) => ({ request,isAuthenticated})
  });
  
  server.express.use(logger("dev"));
  server.express.use(authenticateJwt);
  server.express.post("/api/upload",uploadMiddleware,uploadController)
server.start({port:PORT},()=> console.log(`server running on port ${PORT}`));

