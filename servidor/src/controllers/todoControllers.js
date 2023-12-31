import { createTodo } from "../logic/todos/createTodo.js"
import { deleteTodoDb } from "../logic/todos/deleteTodo.js";
import { updateTodo } from "../logic/todos/updateTodo.js";
import { decodedToken } from "../logic/user/genToken.js";
import { prisma } from "../server/app.js"; 


export const createTodoCtrl =  async(req, res) => {
    const todo = req.body;
    const token  = req.headers.authorization;
    const tokendecode =  decodedToken(token);
    const userId = tokendecode.id;
    const todoCreate = await createTodo(todo, userId);
    if(todoCreate){
        res.send("tarea creada con exito")
    };
  

};

export const getTodosCtrl = async(req, res) => {
    const {userId} = req.params;
    const userIdInt = JSON.parse(userId);
    try {
        const findTodo = await prisma.todo.findMany({
            where : {authorId : userIdInt}
        });
    
        return res.json(findTodo)
    } catch (error) {
        return res.send(error)
    }
   
 };

 export const  updateTodoCtrl = async(req, res) => {
    const todo = req.body;
    const {todoId} = req.params;
    const update = await updateTodo(todo , todoId);
    if(update){
        res.send(update).json().status(200)
    };
 };

 export const deleteTodoCtrl = async(req , res) => {
    const {todoId} = req.params;
    const deleteTodo = await deleteTodoDb(todoId)
    if(deleteTodo.count === 0){
        res.send({mensajeErr : "este todo no existe o ya ha sido eliminado."}).status(400)
    }else if(deleteTodo.count === 1){
        res.send({mensaje : "este todo  se ha eliminado correctamente."}).status(200)
    }
 };