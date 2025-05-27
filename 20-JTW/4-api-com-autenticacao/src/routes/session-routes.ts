import { Router } from "express";

import { ControllerSession } from "../controllers/controller-session";

const sessionController = new ControllerSession()

export const sessionRoutes = Router()


sessionRoutes.get('/', sessionController.index)
sessionRoutes.post('/', sessionController.create)



