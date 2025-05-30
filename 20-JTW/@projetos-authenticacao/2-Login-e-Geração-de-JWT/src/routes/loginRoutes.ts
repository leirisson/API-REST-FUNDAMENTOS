import { Router } from "express";

import { LoginController } from '../controller/LoginController'

const loginController = new LoginController()

export const loginRoutes = Router()

loginRoutes.post('/', loginController.login)