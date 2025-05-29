import { Router } from "express"

import { ensureAuthenticate } from '../middleware/ensureAuthenticate'

import { ControllerUser } from "../controllers/user-controller"

const controllerUser = new ControllerUser()

export const routesUser = Router()

routesUser.get('/', ensureAuthenticate, controllerUser.index)
routesUser.post('/', ensureAuthenticate,controllerUser.create)