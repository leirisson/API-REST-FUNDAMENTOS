
import {Router} from 'express'
import { ControllerProdutos } from "../controller/ControllerProdutos";
import { middlewareLocal } from "../middlewares/middlewareLocal";


const controllerProdutos = new  ControllerProdutos

export const routerProdutos = Router()

routerProdutos.get('/', middlewareLocal, controllerProdutos.getProdutos)
routerProdutos.post('/', controllerProdutos.createProduto)