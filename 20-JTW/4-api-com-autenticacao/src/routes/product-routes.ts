import { Router } from "express"

import { ControllerProduct } from '../controllers/controller-product'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const prodructController = new ControllerProduct()

export const productRoutes = Router()

productRoutes.get('/',  prodructController.index)
productRoutes.post('/', ensureAuthenticated, prodructController.create)