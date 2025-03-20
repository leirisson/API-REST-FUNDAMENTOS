import {Router} from 'express'
import { routesAdmin } from './adminRoutes'


export const routes = Router()

routes.use('/admin',routesAdmin)