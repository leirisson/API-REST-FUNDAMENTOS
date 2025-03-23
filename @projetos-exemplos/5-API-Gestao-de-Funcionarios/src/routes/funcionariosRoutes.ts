import { Router } from "express"
import { middlewareLog } from "../middleware/middlewareLog"
import { Funcionarioscontroller } from "../controller/Funcionarioscontroller"


const funcionariosController = new Funcionarioscontroller

export const funcionariosRoutes = Router()


funcionariosRoutes.get('/', middlewareLog, funcionariosController.getAll)
funcionariosRoutes.get('/:id', middlewareLog, funcionariosController.getOneFuncionario)
funcionariosRoutes.put('/:id', middlewareLog, funcionariosController.update)
funcionariosRoutes.post('/', middlewareLog, funcionariosController.createFuncionario)
funcionariosRoutes.delete('/:id', middlewareLog, funcionariosController.delete)