import { Router } from "express"
import { ProjetosController } from "../../controllers/projetosController"


const projetosController = new ProjetosController

export const projetosRoutes = Router()

projetosRoutes.get('/', projetosController.getAll)
projetosRoutes.post('/', projetosController.createProjeto)

