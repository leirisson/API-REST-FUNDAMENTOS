import { Router } from "express"
import { productRoutes } from "./product-routes"


export const routes = Router()

routes.use('/product', productRoutes)
