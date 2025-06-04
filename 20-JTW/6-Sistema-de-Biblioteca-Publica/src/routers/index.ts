import { Router } from "express"
import { loginRoutes } from "./login-routes"

export const routes = Router()

routes.use('/login', loginRoutes)