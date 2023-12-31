import { prisma } from "../../server/app.js";



export const findUser = async (user) => {
    const {email} = user

    const find = await prisma.user.findUnique({
        where : {
            email : email
        }
    })
    return find
}