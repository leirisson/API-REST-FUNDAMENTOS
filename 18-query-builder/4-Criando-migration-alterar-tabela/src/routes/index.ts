import { Router } from 'express'
import { routerProdutos } from './routerProdutos'

export const routes = Router()

routes.use('/produtos', routerProdutos)