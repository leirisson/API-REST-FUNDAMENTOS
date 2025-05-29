import { Router } from "express"


import { ControllerUser } from "../controllers/user-controller"

const controllerUser = new ControllerUser()

export const routesUser = Router()

routesUser.get('/', controllerUser.index)