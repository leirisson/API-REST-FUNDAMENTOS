import { Router } from "express"
import { routesProduct } from "./product-routes"
import { sessionRoutes } from "./session-routes"


export const routes = Router()

routes.use('/products', routesProduct)
routes.use('/sessions', sessionRoutes)