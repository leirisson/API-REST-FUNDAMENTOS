import { Router } from "express"
import { SessionsController } from "../controller/session-controller"

export const sessionsRoutes = Router()
const sessionsController = new SessionsController()

sessionsRoutes.post("/", sessionsController.create)