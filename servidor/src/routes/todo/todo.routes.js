import { Router } from "express";
import { isLogin } from "../../logic/authMiddleware/authMiddleware.js";
import * as todoCtrl from "../../controllers/todoControllers.js"
export const todoRoute = Router()



todoRoute.get("/todos/:userId" , isLogin, todoCtrl.getTodosCtrl)
todoRoute.post("/todo/create",isLogin, todoCtrl.createTodoCtrl)
todoRoute.put("/update/todo/:todoId", isLogin , todoCtrl.updateTodoCtrl)
todoRoute.delete("/todo/delete/:todoId", isLogin , todoCtrl.deleteTodoCtrl)