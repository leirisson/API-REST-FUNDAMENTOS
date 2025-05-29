import { Router } from "express"
import { routesUser } from "./user-routes"
import { sessionRoutes } from "./session-routes"

export const routes = Router()

routes.use('/cad-user', routesUser)
routes.use('/sessions', sessionRoutes)