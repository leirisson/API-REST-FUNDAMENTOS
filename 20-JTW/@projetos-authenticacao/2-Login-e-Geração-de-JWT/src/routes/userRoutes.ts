import { Router } from "express"
import { UserController } from '../controller/UserController'

const userController = new UserController()


export const userRoutes = Router()

userRoutes.post('/', userController.create)