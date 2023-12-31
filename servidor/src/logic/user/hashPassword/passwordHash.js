import bcryptjs from "bcryptjs"


export const passwordHashed = async(password) => {
    const salt =  await bcryptjs.genSalt(10)
    const passHash = await bcryptjs.hash(password , salt)
    return passHash
}

export const decodePass = async (passwordHash , passwordInput) => {

   const comparePass = await   bcryptjs.compare(passwordHash , passwordInput)
   console.log(comparePass)
   return comparePass
}