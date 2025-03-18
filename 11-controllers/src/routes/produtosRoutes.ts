import { Router } from "express";
import { myMiddleware } from "../middlewares/myMiddleware";

import { ProdutosController } from "../controllers/produtosController";

const produtosController = new ProdutosController

export const produtosRoutes = Router();

produtosRoutes.get("/", myMiddleware, produtosController.index)
produtosRoutes.post("/", produtosController.create)
