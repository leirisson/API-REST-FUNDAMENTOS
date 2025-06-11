import { Router } from "express"
import { sessionRoutes } from "./session-routes"
import { obrasRoutes } from "./obras-routes"
import { relatoriosRoutes } from "./relatorios-routes"

export const routes = Router()

routes.use('/obras', obrasRoutes)
routes.use('/relatorios', relatoriosRoutes)
routes.use('/sessions', sessionRoutes)