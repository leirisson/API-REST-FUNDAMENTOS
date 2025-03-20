import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware ";
import { ProdutoController } from "../controllers/ProdutoController";


//instanciando a classe 
const produtoController = new ProdutoController

export const  produtosRoutes = Router()

produtosRoutes.get('/', authMiddleware, produtoController.getAll)