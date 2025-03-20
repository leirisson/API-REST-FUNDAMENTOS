import { Router } from "express";
import { produtosRouters } from "./produtosRouter";

export const  routes = Router()


routes.use('/produtos', produtosRouters)