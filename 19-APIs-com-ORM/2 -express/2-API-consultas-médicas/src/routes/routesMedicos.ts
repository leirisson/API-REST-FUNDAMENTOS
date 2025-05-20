import { Router } from "express"
import { ControllerMedicos } from "../controllers/controller-medicos"

const controllerMedicos = new ControllerMedicos()

export const routerMedicos = Router()

routerMedicos.get('/', controllerMedicos.index)
routerMedicos.post('/', controllerMedicos.create)
routerMedicos.get('/:id', controllerMedicos.show)
