import { Router } from "express"
import { ProjetosController } from "../../controllers/ProjetosController"



const projetosController = new ProjetosController

export const projetosRoutes = Router()

projetosRoutes.get('/', projetosController.getAll)
projetosRoutes.post('/', projetosController.createProjeto)
projetosRoutes.put('/:id', projetosController.updateProjeto)
projetosRoutes.delete('/:id', projetosController.deleteProjeto)