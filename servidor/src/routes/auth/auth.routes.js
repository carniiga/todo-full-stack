import { Router } from "express";

import * as authCtrl  from "../../controllers/authControllers.js";

export const authRoute = Router()


authRoute.post("/register", authCtrl.registerUserCtrl)
authRoute.post("/login", authCtrl.loginUserCtrl)


