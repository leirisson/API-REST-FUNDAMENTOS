import { Request, Response, Router } from 'express'
import { middlewareLocalDeRota } from '../middleware/middlewareLocalDeRota'
import { CursosController } from '../controllers/CursosController'
import { middlewareGlobal } from '../middleware/middlewareGlobal'


const cursosController = new CursosController
export const cursosRoutes = Router()

cursosRoutes.get('/', middlewareLocalDeRota, cursosController.listaTodosOsCursos)
cursosRoutes.post('/', middlewareLocalDeRota, cursosController.cadastroDeCurso)
cursosRoutes.get('/:id/modulo/', middlewareLocalDeRota, cursosController.listarCursosPorModulo)