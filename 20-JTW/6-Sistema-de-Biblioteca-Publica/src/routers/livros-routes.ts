import { Router } from "express";

import { LivroController } from '../controllers/livros-controller'
import { ensureAthenticated } from '../middlewares/ensureAthenticated'
import { verifyUserAthorization } from '../middlewares/verifyUserAthorization'

const livroController = new LivroController()
export const livrosRoutes = Router()

livrosRoutes.post('/', ensureAthenticated, verifyUserAthorization(['admin']), livroController.create)
livrosRoutes.get('/', livroController.listAllBooks)
