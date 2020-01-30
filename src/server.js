import dotenv from "dotenv"
dotenv.config({path:path.resolve(__dirname,".env")});
import path from "path"

import  {GraphQLServer}  from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;


const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start({port:PORT},()=> console.log(`server running on port ${PORT}`));
