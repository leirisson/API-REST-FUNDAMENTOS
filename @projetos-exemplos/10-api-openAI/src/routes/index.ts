import { Router } from 'express'
import { routesAI } from './routesAI'

export const routes = Router()

routes.use('/ai', routesAI)