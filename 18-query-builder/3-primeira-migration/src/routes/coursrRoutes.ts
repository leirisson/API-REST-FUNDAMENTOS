import { Router } from 'express'
import { CourseController } from '../controller/CourseController'
import { middleWareLocal } from '../middlewares/middleWareLocal'

const courseController = new CourseController

export const coursrRoutes = Router()


coursrRoutes.get('/', middleWareLocal, courseController.hello)