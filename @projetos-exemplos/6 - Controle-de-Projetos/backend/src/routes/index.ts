import { Router } from "express";
import { projetosRoutes } from "./projetosRoutes";


export const routes = Router()

routes.use('/projetos',projetosRoutes)