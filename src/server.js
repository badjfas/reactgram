import  {GraphQLServer}  from "graphql-yoga";
import dotenv from "dotenv"
import path from "path"
console.log(__dirname);
import logger from "morgan";
import schema from "./schema";

console.log(process.env.PORT);

const PORT = process.env.PORT || 4000;

dotenv.config({path:path.resolve(__dirname,".env")});

const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start({port:PORT},()=> console.log(`server running on port ${PORT}`));
