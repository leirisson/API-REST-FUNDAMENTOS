import { Router } from 'express'
import { middlewareLocal } from '../middlewares/middlewareLocal'
import { PacienteController } from '../controllers/PacienteController'

const pacienteController = new PacienteController

export const routerPaciente = Router()

routerPaciente.get('/', middlewareLocal, pacienteController.listaDePacientes)
routerPaciente.post('/', middlewareLocal, pacienteController.createPaciente)
routerPaciente.put("/:id", middlewareLocal, pacienteController.atualizarPaciente)
routerPaciente.delete("/:id", middlewareLocal, pacienteController.cadastrarPaciente)