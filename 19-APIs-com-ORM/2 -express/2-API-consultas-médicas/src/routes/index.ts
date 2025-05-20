import { Router } from "express"
import { routerMedicos } from "./routesMedicos"
import { routerConsultas } from "./routerConsultas"

export const routes = Router()

routes.use('/medicos', routerMedicos)
routes.use('/consultas', routerConsultas)