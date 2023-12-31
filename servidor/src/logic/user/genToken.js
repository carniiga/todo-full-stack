import  Jwt  from "jsonwebtoken";


const privateKey = "/u]Ñ[/"  
export const generateToken = (user) => {
    
    const token =  Jwt.sign(user , privateKey)
    return token
}
export const decodedToken = (token) => {
    const tokenClean = token.slice(7)
  
    const decoded = Jwt.verify(tokenClean , privateKey)
   return decoded
   

}