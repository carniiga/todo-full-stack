import { prisma } from "../../server/app.js";



export const updateTodo = async(todo, id) => {
    const update = await prisma.todo.updateMany({
        where : {id : id},
        data : todo
    })
    if(update){
        const prodUpdated = await prisma.todo.findMany({
            where : {id : id}
        })
        return prodUpdated
    }



    
}