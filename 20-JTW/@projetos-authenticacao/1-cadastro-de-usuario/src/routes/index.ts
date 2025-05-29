import { Router } from "express";
import { registerRroutes } from "./register-routes";

export const routes = Router()

routes.use('/register', registerRroutes)
