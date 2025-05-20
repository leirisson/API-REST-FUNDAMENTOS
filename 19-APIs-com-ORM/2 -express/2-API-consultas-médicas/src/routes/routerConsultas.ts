import { Router } from "express"

import { ConsultasController } from "../controllers/controller-consultas"

const consultasController = new ConsultasController()

export const routerConsultas = Router()

routerConsultas.get('/', consultasController.index)