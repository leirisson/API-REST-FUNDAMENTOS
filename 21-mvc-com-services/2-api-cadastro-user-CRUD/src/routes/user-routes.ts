import { Router } from "express"

import { UserController } from '../controllers/user-controller'

const userController = new UserController()

export const userRoutes = Router()

userRoutes.get('/', userController.index)