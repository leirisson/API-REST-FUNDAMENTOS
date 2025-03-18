import { Router } from "express";
import { produtosRoutes } from "./produtosRoutes";
import { clientesRouter } from "./clientesRoutes";

export const routes = Router()

routes.use('/produtos', produtosRoutes)
routes.use('/clientes', clientesRouter)