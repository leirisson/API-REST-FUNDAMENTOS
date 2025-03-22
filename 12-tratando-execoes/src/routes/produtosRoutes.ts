import { Router } from "express"
import { authMiddleware } from "../middleware/authMiddleware"

// instanciando a classe 
import { ProdutoController } from "../controllers/ProdutoController"

const produtosController = new ProdutoController

export const produtosRoutes = Router()

produtosRoutes.get('/', authMiddleware,  produtosController.index)
produtosRoutes.post('/', authMiddleware, produtosController.create)

