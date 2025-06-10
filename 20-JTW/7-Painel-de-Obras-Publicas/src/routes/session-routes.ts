import { Router, Request, Response } from "express"
import { SessionController } from '../controller/session-controller'

const sessionController = new SessionController()

export const sessionRoutes = Router()

sessionRoutes.get('/', sessionController.create)