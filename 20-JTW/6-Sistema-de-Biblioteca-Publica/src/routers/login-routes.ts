import { Router } from "express"

import { LoginController } from "../controllers/login-controller"

const loginController = new LoginController()


export const loginRoutes = Router()


loginRoutes.post('/', loginController.login)