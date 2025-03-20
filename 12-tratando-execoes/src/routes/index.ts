import { Router } from "express"
import { produtosRoutes } from "./produtosRoutes"

export const routes = Router()

routes.use('/produtos', produtosRoutes)