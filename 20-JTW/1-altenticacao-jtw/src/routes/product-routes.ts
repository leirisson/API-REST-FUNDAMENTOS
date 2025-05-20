import { Router } from "express"
import { ProductController } from "../controller/product-controller"


export const producRoutes = Router()
const productController = new ProductController()


producRoutes.get("/", productController.index)
producRoutes.post("/", productController.create)

