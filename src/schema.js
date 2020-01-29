//api 폴더의 모든 파일들을 schema.js에서 한번에 받아 옴
import {makeExecutableSchema} from "graphql-tools";
import { fileLoader,mergeResolvers,mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes = fileLoader(path.join(__dirname,"api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname,"/api/**/*.js"));


const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
  });

export default schema;