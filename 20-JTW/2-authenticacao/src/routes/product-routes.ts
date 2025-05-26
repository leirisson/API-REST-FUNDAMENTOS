import { Router } from "express"
import { ProductController } from "../controllers/product-controller"

const productcontroller = new ProductController()


export const productRoutes = Router()

productRoutes.get('/', productcontroller.index)
productRoutes.post('/', productcontroller.create)



