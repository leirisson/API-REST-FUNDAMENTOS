import { Router } from "express"
import { ensureAuthenticathed } from "../middlewares/ensuAthenticated"

import { ProductController } from "../controllers/product-controller"



const productController = new ProductController()

export const routesProduct = Router()

routesProduct.get('/', productController.index)
routesProduct.post('/', ensureAuthenticathed, productController.create)