import { Router } from 'express'
import { sessionRoutes } from './session-routes'
import { productRoutes } from './product-routes'

export const routes = Router()


routes.use('/products', productRoutes)
routes.use('/sessions', sessionRoutes)