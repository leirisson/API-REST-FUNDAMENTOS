
import { Router } from "express"
import { clientesRoutes } from "./clientesRouter"


export const routes = Router()

routes.use('/clientes', clientesRoutes)