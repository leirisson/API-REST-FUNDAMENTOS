import { Router } from "express"
import { routesUser } from "./user-routes"

export const routes = Router()

routes.use('/cad-user', routesUser)
