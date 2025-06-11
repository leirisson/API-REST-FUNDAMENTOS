import { Router } from "express"

import { RelatoriosController } from "../controller/relatorios-coontroller"

const relatorioController = new RelatoriosController()


export const relatoriosRoutes = Router()


relatoriosRoutes.get('/', relatorioController.getAll)

