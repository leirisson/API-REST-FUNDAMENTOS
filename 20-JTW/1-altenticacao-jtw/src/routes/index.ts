import { Router } from "express"
import { sessionsRoutes } from "./sessions-routes"
import { producRoutes } from "./product-routes"

export const routes = Router()

routes.use('/sessions', sessionsRoutes)
routes.use('/products', producRoutes)