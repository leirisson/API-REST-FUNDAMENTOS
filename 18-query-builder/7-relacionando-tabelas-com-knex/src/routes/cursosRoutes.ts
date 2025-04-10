import { Request, Response, Router } from 'express'
import { middlewareLocalDeRota } from '../middleware/middlewareLocalDeRota'
import { CursosController } from '../controllers/CursosController'


const cursosController = new CursosController
export const cursosRoutes = Router()

cursosRoutes.get('/', middlewareLocalDeRota, cursosController.listaTodosOsCursos)
