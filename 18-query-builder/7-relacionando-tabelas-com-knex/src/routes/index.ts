import {Router} from 'express'
import { cursosRoutes } from './cursosRoutes'
import { modulosRoutes } from './modulosRoutes'

export const routes = Router()

routes.use('/cursos', cursosRoutes)
routes.use('/modulos', modulosRoutes)