import { Router } from "express";
import { ProductController } from "../controller/product-controller";

const productController = new ProductController()

export const productRoutes = Router()

productRoutes.post('/', productController.create)