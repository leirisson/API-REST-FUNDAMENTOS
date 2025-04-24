import { UserController } from "@/controllers/users-controller"
import { Router } from "express"


export const usersRoutes = Router()

const userController = new UserController()

usersRoutes.get('/', userController.index)