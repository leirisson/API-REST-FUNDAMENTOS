import { Router } from "express"
import { loginRoutes } from "./loginRoutes"
import { userRoutes } from "./userRoutes"


export const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/users', userRoutes)