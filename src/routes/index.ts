import { Router } from "express";
import { protudosRoutes } from "./produtos-routes";

const routes = Router()

routes.use('/produtos', protudosRoutes)


export { routes }