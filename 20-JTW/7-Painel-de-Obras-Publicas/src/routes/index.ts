import { Router } from "express"
import { sessionRoutes } from "./session-routes"
import { obrasRoutes } from "./obras-routes"

export const routes = Router()

routes.use('/obras', obrasRoutes)
// routes.use('/relatorios')
routes.use('/sessions', sessionRoutes)