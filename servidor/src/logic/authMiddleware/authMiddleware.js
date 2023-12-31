


export const isLogin = async(req , res, next) => {
    const token = req.headers.authorization
    if(token){
        next()
    }
}