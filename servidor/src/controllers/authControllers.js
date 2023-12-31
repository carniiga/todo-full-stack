import { createUser } from "../logic/user/createUser.js";
import { findUser } from "../logic/user/findUser.js";
import { generateToken } from "../logic/user/genToken.js";
import { decodePass } from "../logic/user/hashPassword/passwordHash.js";
export const registerUserCtrl = async(req , res) => {
    const user = await req.body;
    const registerUser = await createUser(user);
    if(!registerUser){
       res.send("este usuario ya está registrado. Por favor inicie sesión")
    }else{
        res.status(200).json({
            mensaje : "este usuario se creó con exito. Por favor inicie Sesión"
        })
    }

};"este usuario se creó con exito. Por favor inicie Sesión"

export const loginUserCtrl = async(req, res) =>{
    const user = req.body;
    const findUserDb = await findUser(user);

  
    if(findUserDb === null){
        return res.status(400).send("para iniciar sesion crease una cuenta.")
    }
    else if(findUserDb.id){
        const verifyPass = await decodePass (user.password , findUserDb.password)
        if(verifyPass){
        const token =  generateToken(findUserDb)
        res.send({
            token : token,
            user : findUserDb
    }).json().status(200)
        }else if (!verifyPass){
            res.send("usuario o contraseña incorrecta").status(400)
        }
        
    }
   
    
}