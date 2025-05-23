import { Router } from "express"
import {SessionController} from '../controllers/session-controller'

const sessionController = new SessionController()

export const sessionRoutes = Router()


sessionRoutes.get('/', sessionController.index)
sessionRoutes.post('/', sessionController.create)