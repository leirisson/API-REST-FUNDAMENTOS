import { Router } from "express"
import { productsRoutes } from "./router-products"


export const routes = Router()


routes.use('/products', productsRoutes)