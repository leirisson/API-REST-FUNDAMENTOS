import { Router } from "express"
import { routerMedicos } from "./routesMedicos"

export const routes = Router()

routes.use('/medicos', routerMedicos)
