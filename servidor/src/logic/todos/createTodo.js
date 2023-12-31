import { prisma } from "../../server/app.js";


export const createTodo = async(todo , userId) => {
    const {title , description  , finish} = todo
    const createTodoDb = await prisma.todo.createMany({
        data : {
            title,
            description,
            authorId : userId,
            finish
        }
    })
    return true
  
}