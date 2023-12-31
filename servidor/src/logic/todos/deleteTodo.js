import { prisma } from "../../server/app.js";


export const deleteTodoDb = async(todoId) => {

   try {
    const deleteTodo  = await prisma.todo.deleteMany({
        where : {id : todoId}
    })
    return deleteTodo
   } catch (error) {
        return error
   }
    
}   