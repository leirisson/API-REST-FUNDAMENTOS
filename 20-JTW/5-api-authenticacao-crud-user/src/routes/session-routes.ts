import { Router } from "express";

import { SessionController } from '../controllers/sessionController'

const sessionController  = new SessionController()

export const sessionRoutes = Router()

sessionRoutes.post('/', sessionController.create)
