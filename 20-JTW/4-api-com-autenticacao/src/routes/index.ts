import { Router } from 'express'
import { sessionRoutes } from './session-routes'
import { productRoutes } from './product-routes'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'


export const routes = Router()


routes.use('/products', productRoutes)
routes.use('/sessions', sessionRoutes)