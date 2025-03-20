import { Router } from "express";
import { ProdutoController } from "../controller/ProdutosController";

const produtoController = new ProdutoController

export const produtosRouters = Router();

produtosRouters.get("/",  produtoController.getAll);
