import { Router } from "express"
import { productsRoutes } from "./router-products"
import { routerTable } from "./router-table"
import { tableSessionsRoutes } from "./table-sessions-routes"


export const routes = Router()


routes.use('/products', productsRoutes)
routes.use('/tables', routerTable)
routes.use('/tables-sessions', tableSessionsRoutes)