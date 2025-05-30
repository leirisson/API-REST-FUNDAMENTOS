import { ProductsController } from "@/controllers/products-controller"
import { Router } from "express"


export const productsRoutes = Router()

const productsController = new ProductsController()

productsRoutes.get('/', productsController.index)
productsRoutes.post('/', productsController.createProduct)
productsRoutes.put('/:id', productsController.updateProduct)
productsRoutes.delete('/:id', productsController.deleteProduct)