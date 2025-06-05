import { Router } from "express"
import { loginRoutes } from "./login-routes"
import { livrosRoutes } from "./livros-routes"
import { emprestimosRoutes } from "./emprestimos-routes"



export const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/livros', livrosRoutes)
routes.use('/emprestimos', emprestimosRoutes)