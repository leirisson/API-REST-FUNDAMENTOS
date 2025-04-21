import { Router } from "express"
import { productsRoutes } from "./router-products"
import { routerTable } from "./router-table"


export const routes = Router()


routes.use('/products', productsRoutes)
routes.use('/tables', routerTable)