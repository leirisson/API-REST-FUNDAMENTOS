import {Router} from 'express'
import { coursrRoutes } from './coursrRoutes'
import { middleWareLocal } from '../middlewares/middleWareLocal'


export const routes = Router()

routes.use('/course',coursrRoutes)