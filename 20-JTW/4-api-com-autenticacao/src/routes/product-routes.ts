import { Router } from "express"

import { ControllerProduct } from '../controllers/controller-product'

const prodructController = new ControllerProduct()

export const productRoutes = Router()

productRoutes.get('/', prodructController.index)
productRoutes.post('/', prodructController.create)