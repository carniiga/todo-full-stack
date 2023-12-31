import {prisma} from "../../server/app.js"
import { passwordHashed } from "./hashPassword/passwordHash.js"


export const createUser = async(user) => {
    const {name , password , email} = user
   const findUserDb = await prisma.user.findMany({
    where : { email : email}
   })
   const passTohash = await  passwordHashed(password)
   if(!findUserDb.length){
    const createUser =  await prisma.user.createMany({
        data : {name , password : passTohash ,email}
     
    })
    return true
   } else if (findUserDb){
    return false
   }
}