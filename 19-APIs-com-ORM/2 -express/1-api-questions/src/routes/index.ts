import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { questionsRoutes } from "./questionsRoutes";


export const routes = Router()

routes.use('/users', userRoutes)
routes.use('/questions', questionsRoutes)