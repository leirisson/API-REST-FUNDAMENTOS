import { Router } from "express"
import { middlewareLocalDeRota } from "../middleware/middlewareLocalDeRota"
import { ModulosController } from "../controllers/ModulosController"

const modulosController = new  ModulosController

export const modulosRoutes = Router()

modulosRoutes.get('/', middlewareLocalDeRota, modulosController.listarTodosOsModulos)
modulosRoutes.post('/', middlewareLocalDeRota, modulosController.cadastroDeCurso)