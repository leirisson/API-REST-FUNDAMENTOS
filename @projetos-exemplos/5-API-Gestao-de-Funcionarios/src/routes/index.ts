import { Router } from "express"
import { funcionariosRoutes } from "./funcionariosRoutes"

export const routes = Router()

routes.use('/funcionarios', funcionariosRoutes)