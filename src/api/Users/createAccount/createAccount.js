export default {
    Mutation : {
        createAccount : async(_,args) => {
            const {userName,email,firstName="",lastName="",bio=""}=args;
            const user = await prisma.createUser({
                userName,
                email,
                firstName,
                lastName,
                bio});
            return user;
            }
    }
}