import { Router } from "express";


import { produtosRouter } from "./produtosRoutes";


export const routes = Router()

routes.use("/produtos", produtosRouter)